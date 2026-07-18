# CloudBoost 4.3.0

CloudBoost 4.3.0 reorganizes the app around a clearer session flow and makes the Free and PRO boundaries easier to understand.

## What changed

- Session, Tools and Account views replace the previous long single-page flow.
- An always-visible EN/ES control changes the main interface and core dialogs between English and Spanish.
- Free keeps core profiles, Balanced manual sessions, basic monitoring and display/idle protection without privileged system tuning.
- PRO unlocks AWDL, DNS, Time Machine and process-priority tuning, plus complete causes, timeline, history, automation and Session Proof.
- A new session result summarizes the score and recommended next test when play ends.
- Contextual PRO details are tied to real session signals and remain frequency-capped.
- Payhip checkout and license configuration now fail safely and show a useful error when the purchase page cannot be opened.
- Existing Gumroad and legacy PRO+ licenses keep their access.
- The release pipeline now verifies the current SwiftPM binary, both Intel and Apple Silicon architectures, the packaged configuration and the self-test before publishing.

CloudBoost does not modify games, bypass anti-cheat, install kernel extensions, or promise universal performance gains. It applies temporary macOS session tuning and reports the signals it can actually measure.

## Install

Download the DMG, open it, and drag CloudBoost to `/Applications`. Existing users can also install 4.3.0 through the in-app updater.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://discord.gg/kU5trxtRb

Public results and measurement method: https://victorbrandaao.github.io/CloudBoost/results.html

## Checksums

```text
ZIP SHA256: 9980378424350b0355e90cfb37e6b0a8a959b9ab5720fa5a8bd219134773fb01
DMG SHA256: bf9d2826d483c67dccef0f6e29509a762ef285755cb1f16e5a9189c57a01a119
```
