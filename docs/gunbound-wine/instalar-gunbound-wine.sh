#!/bin/bash
set -euo pipefail
umask 077

# Instala uma cópia do GunBound GIS em um ambiente Wine próprio.
# Uso: bash instalar-gunbound-wine.sh [--check-only] /caminho/GunBound /caminho/GunBound-ProgramData

check_only=0
if [[ ${1:-} == --check-only ]]; then
    check_only=1
    shift
fi

if [[ $# -ne 2 ]]; then
    printf 'Uso: bash %s [--check-only] "/caminho/GunBound" "/caminho/GunBound-ProgramData"\n' "$0" >&2
    exit 2
fi

game_source=$1
data_source=$2
for item in "$game_source/launcher.exe" "$game_source/SilentAntiCheat/silent.exe" \
            "$game_source/Game/client.exe" "$data_source/installed.json" "$data_source/environment"; do
    if [[ ! -f "$item" ]]; then
        printf 'Arquivo ausente: %s\n' "$item" >&2
        exit 2
    fi
done
game_source=$(cd -- "$game_source" && pwd -P)
data_source=$(cd -- "$data_source" && pwd -P)
if [[ $(/usr/bin/uname -s) != Darwin || $(/usr/sbin/sysctl -n hw.optional.arm64 2>/dev/null || true) != 1 ]]; then
    printf 'Este roteiro foi feito para Mac com Apple Silicon.\n' >&2
    exit 2
fi
if ! /usr/bin/arch -x86_64 /usr/bin/true 2>/dev/null; then
    printf 'Instale a Rosetta pelo macOS e execute novamente.\n' >&2
    exit 2
fi

if [[ $check_only -eq 1 ]]; then
    printf 'Arquivos de origem, Apple Silicon e Rosetta verificados. Nenhum download foi iniciado.\n'
    exit 0
fi

base="$HOME/Library/Application Support/GunBound GIS Wine"
if [[ -e "$base" || -L "$base" ]]; then
    printf 'Já existe um ambiente em %s. Preserve-o ou renomeie-o antes de reinstalar.\n' "$base" >&2
    exit 2
fi

work=$(/usr/bin/mktemp -d "${TMPDIR:-/tmp}/gunbound-gis.XXXXXXXX")
trap '/bin/rm -rf -- "$work"' EXIT
cd "$work"

printf 'Baixando cerca de 615 MB de Wine Staging 11.20, DXVK e Soju, que fornece o módulo ncrypt.\n'
/usr/bin/curl -fL --retry 2 -o wine.tar.xz \
    https://github.com/Gcenx/macOS_Wine_builds/releases/download/11.20/wine-staging-11.20-osx64.tar.xz
/usr/bin/curl -fL --retry 2 -o dxvk.tar.gz \
    https://github.com/Gcenx/DXVK-macOS/releases/download/v1.10.3-20230507-repack/dxvk-macOS-async-v1.10.3-20230507-repack.tar.gz
/usr/bin/curl -fL --retry 2 -o engine.tar.xz \
    https://github.com/BCD1210/soju/releases/download/engine-v1.7/wine-engine-x86_64.tar.xz

/usr/bin/shasum -a 256 -c <<'HASHES'
4df858c5e72920deaf123cbc29fa2b9e64c23bcf2dea59e0a7047b879b9cd952  wine.tar.xz
acd1520ad105d8ef124a09c8e11a259a5dc8bdc565ad18e0e52693f9807b2477  dxvk.tar.gz
f13d770447289681e4efdec8db04e9c9a08d107d83546431ee02ed3efaef27b1  engine.tar.xz
HASHES

/bin/mkdir wine dxvk engine
/usr/bin/tar -xf wine.tar.xz -C wine
/usr/bin/tar -xf dxvk.tar.gz -C dxvk
/usr/bin/tar -xf engine.tar.xz -C engine --include '*/x86_64-windows/ncrypt.dll'

ncrypt=$(/usr/bin/find "$work/engine" -type f -path '*/x86_64-windows/ncrypt.dll' -print)
[[ -f "$ncrypt" && -d "$work/wine/Wine Staging.app" ]]
printf '%s  %s\n' 1908e7f36020aa3aa93966b41a95bba1e5040109a76b7d69ce0381ed1de72e93 "$ncrypt" \
    | /usr/bin/shasum -a 256 -c -

/bin/mkdir "$base"
runtime="$base/Wine Staging.app/Contents/Resources/wine"
export WINEPREFIX="$base/prefix"
export WINEDEBUG=-all
wine="$runtime/bin/wine"
drive="$WINEPREFIX/drive_c"
game="$drive/Program Files/GunBound"
data="$drive/ProgramData/GunBound"
dxvk="$work/dxvk/dxvk-macOS-async-v1.10.3-20230507-repack"

trap 'printf "Instalação interrompida. Os arquivos criados estão em %s.\n" "$base" >&2' ERR
/bin/mv "$work/wine/Wine Staging.app" "$base/"
"$wine" --version
"$wine" wineboot -i
"$runtime/bin/wineserver" -w
"$wine" winecfg -v win11

for pair in x64:system32 x32:syswow64; do
    for dll in d3d11 d3d10core; do
        /bin/cp "$dxvk/${pair%:*}/$dll.dll" "$drive/windows/${pair#*:}/$dll.dll"
    done
done
for dll in d3d11 d3d10core; do
    "$wine" reg add 'HKCU\Software\Wine\DllOverrides' /v "$dll" /t REG_SZ /d native,builtin /f
done
"$runtime/bin/wineserver" -w

# O Wine carrega o módulo do seu runtime. Usamos a implementação de chaves
# persistentes do Soju apenas no runtime e no prefixo privados desta instalação.
/bin/cp "$ncrypt" "$runtime/lib/wine/x86_64-windows/ncrypt.dll"
/bin/cp "$ncrypt" "$drive/windows/system32/ncrypt.dll"
/usr/bin/ditto "$game_source" "$game"
/bin/mkdir -p "$data" "$base/dxvk-logs"
/bin/cp "$data_source/installed.json" "$data_source/environment" "$data/"

# Reproduz a propriedade Administradores nas pastas do C: virtual.
admin_descriptor=010001000480100000000C000000000000001C0000000102000000000005200000002002000001010000000000051200000002001C000100000000031400FF011F00010100000000000100000000
/usr/bin/find "$drive" -type d -exec /usr/bin/xattr -wx user.wine.sd "$admin_descriptor" '{}' +

for item in launcher.exe SilentAntiCheat/silent.exe Game/client.exe; do
    /usr/bin/cmp "$game_source/$item" "$game/$item"
done

cat > "$base/play_gunbound.command" <<'LAUNCHER'
#!/bin/bash
set -euo pipefail
umask 077
base="$(cd -- "$(dirname -- "$0")" && pwd)"
export WINEPREFIX="$base/prefix"
export DXVK_LOG_PATH="$base/dxvk-logs"
export WINEDEBUG="${WINEDEBUG:--all}"
cd "$WINEPREFIX/drive_c/Program Files/GunBound"
exec "$base/Wine Staging.app/Contents/Resources/wine/bin/wine" 'C:\Program Files\GunBound\launcher.exe' "$@"
LAUNCHER
/bin/chmod 700 "$base/play_gunbound.command"
trap - ERR
printf '\nAbra o launcher com este comando:\n  %q\n' "$base/play_gunbound.command"
