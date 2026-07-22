# CloudBoost 4.3.2

CloudBoost 4.3.2 adds dedicated Shadow PC support and restores one universal download for Intel and Apple Silicon Macs.

## What changed

- Added a Shadow PC profile with app detection, launch support and Shadow-specific session guidance.
- Shadow diagnostics now account for client latency, route p95, jitter, VPN routing and bitrate choices without claiming control over the remote PC.
- The release package is universal (`arm64` and `x86_64`) and supports macOS 12 Monterey or later.
- Added focused Minecraft and Roblox profiles.
- Simplified the picker around cloud gaming, remote play, competitive games and the profiles that provide useful diagnostics.
- Improved Free and PRO explanations so users can see which diagnostics and automatic fixes are paid.
- Hardened update-package identity checks, network sampling, CPU reporting, restore behavior and Payhip validation.
- Existing Payhip, Gumroad and legacy PRO+ licenses keep their access.

CloudBoost does not alter Shadow's remote hardware, modify games, bypass anti-cheat, install a kernel extension or promise extra FPS. It observes and tunes the local Mac side of a gaming session.

## Install

CloudBoost 4.3.2 supports Intel and Apple Silicon Macs running macOS 12 Monterey or later.

Download the DMG, open it, and drag CloudBoost to `/Applications`. Existing users can also install 4.3.2 through the in-app updater.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://discord.gg/kU5trxtRb

## Checksums

```text
ZIP SHA256: 3d42394c07ad51f05aa5a89e0a70f0489b657ea5f9ff7a14edd8bf6688d72b5b
DMG SHA256: 7e712cc65cacad898630536b44c0411bb5fa8fdffe25c77fe520f3a79933fe44
```
