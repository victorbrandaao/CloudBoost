# CloudBoost 4.3.1

CloudBoost 4.3.1 focuses on measurable session evidence, safer updates and lower app overhead.

## What changed

- Session Proof records game-process detection, route p95, maximum jitter, packet loss, thermal state and threshold events.
- PRO compares the current result with the previous saved run for the same profile.
- League of Legends detection now covers the native client and game process more reliably.
- Network probes run concurrently and reuse one process snapshot, reducing duplicated work during play.
- The updater verifies the expected bundle identifier, version, executable and SHA256 before replacing the installed app.
- Route-sample and UDP DNS messages are clearer when a VPN, firewall or network policy blocks a probe.
- Restore and diagnostic states are more explicit when macOS does not allow an operation.
- Existing Payhip, Gumroad and legacy PRO+ licenses keep their access.

CloudBoost does not measure FPS, inject into games, bypass anti-cheat or install a kernel extension. Its evidence is observational network and macOS system data.

## Measured League session

The release was exercised during a 42m 38s League of Legends session on macOS. The recorded result was 92/100, route p95 25 ms, maximum jitter 8 ms and maximum packet loss 0.0%. A separate 60-sample window measured CloudBoost at 1.68% average CPU and 46.1 MB average memory.

Method, screenshots and raw CSV: https://victorbrandaao.github.io/CloudBoost/results/league-of-legends-pro-session.html

This is one observational session, not a universal performance claim.

## Install

CloudBoost 4.3.1 supports Apple Silicon Macs running macOS 12 or later.

Download the DMG, open it, and drag CloudBoost to `/Applications`. Existing users can also install 4.3.1 through the in-app updater.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://discord.gg/kU5trxtRb

## Checksums

```text
ZIP SHA256: 22ad6b26b2ddbd68661ecaf4080e18a4791d1b58a2ad30ed6fe96ee1b7cd1831
DMG SHA256: f2977cefed78874b17f48266f2cd57529e6c39270374f3b05d7ab347cacfc41f
```
