# GunBound GIS on Mac with Wine

[Português](#português) · [Installer source](instalar-gunbound-wine.sh) · [Official GunBound website](https://gunbound.gg/en/)

[Watch the CloudBoost setup check](https://github.com/victorbrandaao/CloudBoost/releases/download/v5.1.1/CloudBoost-GunBound-demo-en.mp4) using a test folder. [Get the Apple Silicon preview](https://github.com/victorbrandaao/CloudBoost/releases/tag/v5.1.1).

The CloudBoost maintainer signed in and entered the game on one Apple Silicon M1 Mac using Wine Staging 11.20, DXVK for macOS and GunBound launcher 1.1.0.1123. The script below reproduces the reported layout. A fresh end-to-end installation using the script still needs independent testing. This is an independent community guide.

1. Install and update GunBound on Windows from the official website. Copy `C:\Program Files\GunBound` from your own installation. From `C:\ProgramData\GunBound`, copy only `installed.json` and `environment` into a separate folder called `GunBound-ProgramData`. Keep both folders on your devices.
2. On an Apple Silicon Mac, follow [Apple’s instructions for Rosetta](https://support.apple.com/en-us/102527). Put both extracted folders and [instalar-gunbound-wine.sh](instalar-gunbound-wine.sh) in Downloads.
3. Check the inputs first. This check makes no downloads or installation changes.

   ```bash
   bash "$HOME/Downloads/instalar-gunbound-wine.sh" --check-only \
     "$HOME/Downloads/GunBound" "$HOME/Downloads/GunBound-ProgramData"
   ```

4. When the check passes, run the same command without `--check-only`. The script downloads about 615 MB, checks the archives against pinned SHA-256 hashes and creates `~/Library/Application Support/GunBound GIS Wine`. It uses [Wine Staging 11.20](https://github.com/Gcenx/macOS_Wine_builds/releases/tag/11.20), [DXVK for macOS](https://github.com/Gcenx/DXVK-macOS/releases/tag/v1.10.3-20230507-repack) and [Soju’s Wine build](https://github.com/BCD1210/soju/releases/tag/engine-v1.7) for its [persisted-key implementation](https://github.com/BCD1210/soju/blob/engine-v1.7/patches/ncrypt-persisted-keys.patch). It uses a dedicated Wine prefix, requires no `sudo` and stops if the target folder already exists.
5. In CloudBoost 5.1.1, open **Session Center → GunBound GIS** and select **Check again** or choose your installation folder. If the local files are ready, **Open my GunBound launcher** opens your own command after confirmation and selects the GunBound profile. You can also launch it from Terminal.

   ```bash
   open "$HOME/Library/Application Support/GunBound GIS Wine/play_gunbound.command"
   ```

Sign in and select **Play** in the launcher. If the script stops midway, keep the incomplete folder for troubleshooting or rename it before retrying. Share only your Mac model, macOS version, launcher version and the step where it stopped. Keep credentials, session files and game files on your devices.

## Português

[Veja a verificação no CloudBoost](https://github.com/victorbrandaao/CloudBoost/releases/download/v5.1.1/CloudBoost-GunBound-demo-pt.mp4) com uma pasta de teste. [Baixe a prévia para Apple Silicon](https://github.com/victorbrandaao/CloudBoost/releases/tag/v5.1.1).

O responsável pelo CloudBoost fez login e entrou no jogo em um Mac M1 com Wine Staging 11.20, DXVK para macOS e launcher 1.1.0.1123. O roteiro reproduz a estrutura usada nesse teste. A instalação completa pelo script em um segundo Mac ainda precisa ser reproduzida. É uma iniciativa independente da comunidade.

1. Instale e atualize o jogo no Windows pelo [site oficial](https://gunbound.gg/). Da sua instalação, copie a pasta `C:\Program Files\GunBound`. Em `C:\ProgramData\GunBound`, copie somente `installed.json` e `environment` para uma pasta separada chamada `GunBound-ProgramData`. Mantenha essas pastas nos seus dispositivos.
2. Use um Mac com Apple Silicon e [Rosetta instalada](https://support.apple.com/pt-br/102527). Coloque as duas pastas extraídas e o [instalar-gunbound-wine.sh](instalar-gunbound-wine.sh) em Downloads.
3. Rode primeiro a checagem dos pré-requisitos. Ela não baixa arquivos nem instala o jogo.

   ```bash
   bash "$HOME/Downloads/instalar-gunbound-wine.sh" --check-only \
     "$HOME/Downloads/GunBound" "$HOME/Downloads/GunBound-ProgramData"
   ```

4. Se a checagem passar, rode o mesmo comando sem `--check-only`. O roteiro baixa cerca de 615 MB, verifica os arquivos baixados com SHA-256 e cria `~/Library/Application Support/GunBound GIS Wine`. Usa [Wine Staging 11.20](https://github.com/Gcenx/macOS_Wine_builds/releases/tag/11.20), [DXVK para macOS](https://github.com/Gcenx/DXVK-macOS/releases/tag/v1.10.3-20230507-repack) e o [Wine do Soju](https://github.com/BCD1210/soju/releases/tag/engine-v1.7) para a [implementação de chaves persistentes](https://github.com/BCD1210/soju/blob/engine-v1.7/patches/ncrypt-persisted-keys.patch). Fica num prefixo Wine separado, dispensa `sudo` e para se a pasta de destino já existir.
5. No CloudBoost 5.1.1, abra **Session Center → GunBound GIS**. Selecione **Check again** ou escolha a pasta da instalação. Com os arquivos prontos, **Open my GunBound launcher** pede sua confirmação, abre o comando local e seleciona o perfil GunBound. Você também pode abrir pelo Terminal.

   ```bash
   open "$HOME/Library/Application Support/GunBound GIS Wine/play_gunbound.command"
   ```

Entre no launcher e clique em **Play**. Se o roteiro parar no meio, guarde a pasta incompleta para diagnóstico ou renomeie antes de tentar de novo. Ao pedir ajuda, compartilhe o modelo do Mac, a versão do macOS, a versão do launcher e a etapa onde parou. Mantenha os arquivos do jogo e da sessão nos seus dispositivos.

A verificação da instalação e a abertura do launcher são gratuitas. Quem quiser comparar sessões pode usar o histórico e os perfis salvos do PRO 5, disponível a partir de US$12, em pagamento único. [CloudBoost PRO 5](https://getcloudboost.site/pt/pro-v5.html)
