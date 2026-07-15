# CloudBoost 4.2.2

CloudBoost 4.2.2 fixes license activation and makes native-game diagnostics more honest.

## What changed

- Payhip license activation is repaired.
- Existing Gumroad and legacy PRO+ keys remain supported.
- Native and compatibility Session Lab reports now lead with measured Mac-side pressure instead of treating ping as the likely cause of every stutter.
- Clean local results explicitly point users toward shader compilation, asset streaming, game-engine stalls, and Rosetta/translation as possible causes CloudBoost cannot measure directly.
- Dota 2 guidance now covers first-use shader compilation after game updates.
- Rollback keeps its recovery snapshot when a restore action fails.
- Protected system actions report real failures instead of silently appearing successful.
- The updater verifies the staged app signature before replacing the installed copy.
- CPU/process sampling and Session Proof details are more accurate.

CloudBoost does not modify games, bypass anti-cheat, install kernel extensions, or claim to fix shader compilation. It diagnoses and reduces measurable macOS-side session interference.

## Install

Download the DMG, open it, and drag CloudBoost to `/Applications`. Existing users can also use the in-app updater after 4.2.2 is published.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://discord.gg/kU5trxtRb

Include your Mac model, macOS version, selected profile, connection type, VPN status, and a Session Proof report when possible.

## Checksums

```text
ZIP SHA256: 4427a60256a7d253fb016393daf988a029b6ded7743dfe38fdd08ce96e9bda65
DMG SHA256: 70fdfe1d0c768391d3acb415e1dc66f746cbafcdb7f2041fed0e703add8cd93d
```
