# CloudBoost

Native macOS stability toolkit for cloud and Mac gaming.

CloudBoost is a lightweight menu bar app built in Swift to make gaming sessions feel steadier on macOS. It targets micro-stutters, ping spikes, background interruptions, Wi-Fi/AWDL noise, and power-management issues with temporary, reversible session tuning.

<p align="center">
  <img src="https://img.shields.io/github/v/release/victorbrandaao/CloudBoost?style=for-the-badge">
  <img src="https://img.shields.io/github/downloads/victorbrandaao/CloudBoost/total?style=for-the-badge">
  <img src="https://img.shields.io/github/license/victorbrandaao/CloudBoost?style=for-the-badge">
  <img src="https://img.shields.io/badge/macOS-Apple%20Silicon%20%26%20Intel-black?style=for-the-badge">
  <img src="https://img.shields.io/badge/Distribution-DMG-blue?style=for-the-badge">
  <a href="https://discord.gg/kU5trxtRb"><img src="https://img.shields.io/badge/Discord-Join%20community-5865F2?style=for-the-badge"></a>
</p>

<p align="center">
  <img src="./assets/cloudboost-readme.png" alt="CloudBoost interface preview"/>
</p>

## Download

Visit the [CloudBoost website](https://victorbrandaao.github.io/CloudBoost/) or download the latest release directly from GitHub.

Download the latest release from the [Releases page](https://github.com/victorbrandaao/CloudBoost/releases).

For CloudBoost 3.1.4, download **CloudBoost_v3.1.4.dmg**, open the disk image, and drag **CloudBoost.app** to `/Applications`.

Need help, setup tips, or PRO support? Join the [CloudBoost Discord](https://discord.gg/kU5trxtRb).

> **Gatekeeper note:** Because CloudBoost is independently signed, macOS may show an "App is damaged" warning on first launch. To clear the quarantine flag, run:
>
> ```bash
> xattr -cr /Applications/"CloudBoost.app"
> ```

This repository is used for public releases, documentation, and downloadable binaries. CloudBoost is proprietary software and the source code is not publicly distributed.

## Supported Platforms

| Platform | Availability |
|---|---|
| GeForce NOW | Free |
| Xbox Cloud Gaming (xCloud) | Free |
| Boosteroid | Free |
| Moonlight | Free |
| VoidLink Extreme | Free |
| Counter-Strike 2 cloud/remote profile | Free |
| League of Legends local/cloud profile | Free |
| Dota 2 local/cloud profile | Free |
| Local Game | Free |
| Steam | Free |
| Epic Games | Free |
| Battle.net | Free |

## What CloudBoost Does

macOS background services can interfere with latency-sensitive video streaming. When you enable CloudBoost, the app applies temporary optimizations for the selected session and restores the system when the session ends.

Current optimization areas include:

| Area | Purpose |
|---|---|
| AWDL control | Temporarily disables `awdl0` to reduce AirDrop/Handoff Wi-Fi scanning spikes |
| AWDL Guard | Restores `awdl0` automatically if CloudBoost stops unexpectedly |
| Process priority | Raises priority for the active streaming client with `renice` |
| DNS refresh | Clears stale local DNS cache during session startup |
| Power focus | Uses `caffeinate` to avoid sleep and session throttling |
| Time Machine control | Pauses backup activity in selected presets |
| Network session tuning | Reduces local macOS interference around the gaming session without routing or converting game traffic |
| Competitive profiles | Adds focused profiles for CS2, League of Legends, and Dota 2 |
| Session Doctor | Explains likely lag-spike causes in plain language, with UDP probe context for PRO users |
| Session Score | Shows a simple 0-100 stability score after sessions, with the main issue detected |
| Mouse profiles | Applies FPS or MOBA-oriented mouse profiles for low-latency input |
| Local game detection | Detects common Mac game launchers and selected foreground games |
| Direct updater | Checks GitHub releases, downloads the DMG, and falls back to the release page |

All changes are designed to be temporary and reversible.

## CloudBoost PRO

CloudBoost PRO unlocks advanced automation, stability monitoring, and session intelligence. Core cloud gaming and Mac gaming profiles are available for free.

| Feature | Free | PRO |
|---|---:|---:|
| Cloud gaming profiles | Yes | Yes |
| Mac gaming profiles | Yes | Yes |
| CS2, League, and Dota profiles | Yes | Yes |
| Manual session mode | Yes | Yes |
| AWDL Guard rollback protection | Yes | Yes |
| Balanced preset | Yes | Yes |
| Auto-Detect platform switching | No | Yes |
| Auto Boost | No | Yes |
| Smart Boost decisions | No | Yes |
| Stability Guard | No | Yes |
| Session Doctor + UDP Probe | Basic status | Yes |
| Session Score report | Basic score | Yes |
| Heat Guard | No | Yes |
| Keep Alive for long sessions | No | Yes |
| Competitive and Stream Quality presets | No | Yes |
| Diagnostics export with before/after session view | No | Yes |

PRO is for hands-off stability and full diagnostics. It helps with automatic session start, live health checks, thermal pressure, Low Power Mode, jitter trends, Session Doctor cause detection, UDP probe context, Session Score, and before/after diagnostics so users can see whether the session is becoming smoother.

CloudBoost is not sold as a magic FPS booster and does not try to replace native gaming hardware. The value is reducing local interruptions and making unstable Mac gaming sessions easier to diagnose.

To activate PRO, purchase a license on [Gumroad](https://victorbrandao0.gumroad.com/l/CloudBoost), then click any locked add-on in CloudBoost and enter the license key.

## Features

- Native macOS menu bar app.
- Redesigned session monitor with CPU, ping, priority, network path, jitter, session health, trend, and AWDL Guard status.
- One-click enable/disable flow with automatic restore.
- Presets for Balanced, Competitive, and Stream Quality behavior.
- Competitive profiles for Counter-Strike 2, League of Legends, and Dota 2.
- Floating HUD with live session statistics.
- Session Doctor and Session Score for clearer PRO diagnostics.
- Direct updater that downloads the latest DMG from GitHub releases and opens the installer.
- Local diagnostics and before/after session history for PRO users.

## Community And Support

The [CloudBoost Discord](https://discord.gg/kU5trxtRb) is open to Free and PRO users. Use it for setup help, release updates, issue reports, and PRO license support.

## Security And Transparency

CloudBoost does not collect personal data, install kernel extensions, permanently modify protected system files, or run hidden daemons. The app uses supported macOS command-line tools and native APIs, and session changes are designed to be restored when CloudBoost is disabled or quits.

CloudBoost may request administrator permission for specific system-level actions such as temporary network interface changes. These actions are session-based and are restored when the boost is disabled or when the app quits.

CloudBoost does not bypass anti-cheat systems, modify games, inject into game processes, or promise that cloud/remote play will match a native Windows gaming PC.

## Roadmap

- More platform-specific tuning profiles.
- Better browser-session detection.
- Expanded Adaptive Intelligence recommendations.
- Optional advanced diagnostics panel.
- More cloud gaming platform integrations.

## License

CloudBoost is proprietary software. No permission is granted to copy, modify,
distribute, or create derivative works from the code or app without prior
written authorization. See the [LICENSE](LICENSE) file for the full terms.
