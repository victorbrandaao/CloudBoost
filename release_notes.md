# CloudBoost 4.3.3

CloudBoost 4.3.3 focuses on session safety, verified actions and lower monitoring overhead.

## What changed

- Session summaries report privileged actions only after their result is verified.
- Session Lab captures the baseline before temporary tuning is applied.
- Game priority targets the active game process, uses a moderate value and restores the original priority automatically.
- Keep Alive uses a native macOS power assertion without moving the pointer or requiring Accessibility access.
- Network sampling runs less often and uses fewer probes to reduce CloudBoost overhead.
- Mouse, AWDL, Time Machine, network and process-priority state have safer rollback paths.
- The updater streams SHA256 checks and runs its verified installer from a root-owned location.
- The universal package supports both Intel (`x86_64`) and Apple Silicon (`arm64`) Macs on macOS 12 or later.
- Payhip validation and one-Mac activation handling now match the production database.
- Existing Payhip, Gumroad and legacy PRO+ licenses keep their access.

CloudBoost does not modify games, bypass anti-cheat, install a kernel extension or promise extra FPS. It observes and temporarily tunes the local Mac side of a gaming session.

## Install

CloudBoost 4.3.3 supports Intel and Apple Silicon Macs running macOS 12 Monterey or later.

Download the DMG, open it, and drag CloudBoost to `/Applications`. Existing users can also install 4.3.3 through the in-app updater.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://discord.gg/kU5trxtRb

## Checksums

```text
ZIP SHA256: 6684c65f3fc90f02c80b62b1395ad6ad75811ca157497dc3a7c92e780d55fe78
DMG SHA256: c94dfbf0dd8f25ab9aad66a88a9a111397282211243e7c783846c59f26b57b97
```
