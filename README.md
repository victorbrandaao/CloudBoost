# CloudBoost

CloudBoost is a native macOS menu bar app for cleaner gaming sessions.

It is built for cloud gaming, remote play, and native Mac games where the main problem is not always average FPS or average ping. Sometimes the problem is the session around the game: background sync, AWDL/Wi-Fi interruptions, thermal pressure, Low Power Mode, packet loss, jitter, or a Mac that simply gets noisy at the wrong moment.

CloudBoost starts a focused session, applies temporary macOS tuning, watches the local signals, and restores changes when the session ends.

<p align="center">
  <img src="https://img.shields.io/github/v/release/victorbrandaao/CloudBoost?style=for-the-badge">
  <img src="https://img.shields.io/github/downloads/victorbrandaao/CloudBoost/total?cacheSeconds=300&label=total%20downloads&style=for-the-badge">
  <img src="https://img.shields.io/github/downloads/victorbrandaao/CloudBoost/v4.0.1/total?cacheSeconds=300&label=v4.0.1%20downloads&style=for-the-badge">
  <img src="https://img.shields.io/badge/macOS-12%2B-black?style=for-the-badge">
  <a href="https://discord.gg/kU5trxtRb"><img src="https://img.shields.io/badge/Discord-Support-5865F2?style=for-the-badge"></a>
</p>

<p align="center">
  <img src="./assets/cloudboost-readme.png" alt="CloudBoost interface preview"/>
</p>

## Download

Download the latest DMG from the [Releases page](https://github.com/victorbrandaao/CloudBoost/releases/latest).

Install:

1. Download **CloudBoost_v4.0.1.dmg**.
2. Open the DMG.
3. Drag **CloudBoost.app** to `/Applications`.
4. Open CloudBoost from the macOS menu bar.

If macOS says the app is damaged, clear quarantine:

```bash
xattr -cr /Applications/"CloudBoost.app"
```

Need help? Join the [CloudBoost Discord](https://discord.gg/kU5trxtRb). It is the fastest place for install help, bug reports, PRO/PRO+ license support, and feature requests.

## What's New In 4.0.1

Version 4.0.1 is a stability and trust update after the 4.0 redesign.

- Safer restore when CloudBoost closes during an active session.
- Better diagnostics for privileged actions, showing what macOS accepted.
- More private AWDL Guard and PRO+ Kernel Access heartbeat files.
- Update downloads can now validate a SHA-256 checksum when the release provides one.
- More flexible Gumroad store URL configuration while preserving existing PRO and PRO+ licenses.
- More resilient app layout for future UI changes.
- Existing Free, PRO, and PRO+ access remains unchanged.

## What CloudBoost Does

CloudBoost does not modify games, inject code, bypass anti-cheat, or promise magic FPS gains.

It focuses on the Mac session around the game:

| Area | What it helps with |
|---|---|
| AWDL Guard | Reduces AirDrop/Handoff Wi-Fi interruptions during a session |
| DNS refresh | Clears local DNS cache before a focused session |
| Power focus | Uses macOS session tools to prevent sleep/throttling interruptions |
| Process priority | Gives the selected game/client more breathing room |
| Time Machine control | Pauses selected backup activity while playing |
| Session Doctor | Explains likely spike causes in plain language |
| Session Lab | Runs a short stability check for PRO users |
| Stream Signal | Scores p95 latency, jitter, packet loss, UDP availability, thermal state, and local pressure |
| HUD | Shows a small live overlay for quick session reads |
| Session Proof | Exports a before/latest report for PRO users |

All changes are designed to be temporary and reversible.

## Supported Profiles

All game and service profiles are free.

| Profile | Availability |
|---|---|
| GeForce NOW | Free |
| Xbox Cloud Gaming | Free |
| Boosteroid | Free |
| Moonlight | Free |
| PS Remote Play | Free |
| VoidLink Extreme | Free |
| Counter-Strike 2 cloud/remote profile | Free |
| League of Legends native/cloud profile | Free |
| Dota 2 native/cloud profile | Free |
| Local Game | Free |
| Steam | Free |
| Epic Games | Free |
| Battle.net | Free |

## Free, PRO, And PRO+

Free is for manual sessions and all supported profiles.

PRO is for automation and diagnostics.

PRO+ is for deeper system diagnostics, priority support, early builds, and the heavier session tools.

| Feature | Free | PRO | PRO+ |
|---|---:|---:|---:|
| All profiles | Yes | Yes | Yes |
| Manual session mode | Yes | Yes | Yes |
| Balanced preset | Yes | Yes | Yes |
| AWDL rollback protection | Yes | Yes | Yes |
| Auto-detect | No | Yes | Yes |
| Auto Boost | No | Yes | Yes |
| Smart Boost | No | Yes | Yes |
| Stability Guard | No | Yes | Yes |
| AWDL Guard+ | No | Yes | Yes |
| Session Doctor with UDP probe | Basic | Yes | Yes |
| Session Lab | No | Yes | Yes |
| Stream Signal | No | Yes | Yes |
| PRO Widgets | No | Yes | Yes |
| Heat Guard | No | Yes | Yes |
| Keep Alive | No | Yes | Yes |
| Session Proof export | No | Yes | Yes |
| Kernel Watch | No | No | Yes |
| Background throttle | No | No | Yes |
| Priority Discord support | No | No | Yes |

Existing one-time PRO licenses continue to work. PRO+ Kernel Access is a separate one-time US$25 upgrade.

Buy PRO: [Gumroad](https://victorbrandao0.gumroad.com/l/CloudBoost)

Buy PRO+: [Gumroad](https://victorbrandao0.gumroad.com/l/cloudboost-pro-plus)

## Support

For bugs or confusing diagnostics, please open a GitHub issue or post in Discord.

Useful details:

- macOS version
- Mac model
- selected profile
- Wi-Fi or Ethernet
- screenshot of Session Doctor or Session Lab
- whether a VPN, firewall, or private relay is active

Discord: [https://discord.gg/kU5trxtRb](https://discord.gg/kU5trxtRb)

## Security

CloudBoost is proprietary software. The public repository contains releases, documentation, and downloadable binaries, not the full source code.

CloudBoost does not install kernel extensions, hidden daemons, permanent system patches, game injections, or anti-cheat bypasses. Some actions may ask for administrator permission because macOS requires it for temporary system-level session changes.

Some diagnostics and HUD ideas are inspired by [Better xCloud](https://github.com/redphx/better-xcloud) by redphx. CloudBoost does not use Better xCloud code.

CloudBoost was covered by [MacMagazine](https://macmagazine.com.br/post/2026/06/01/cloudboost-otimiza-a-experiencia-de-jogos-na-nuvem-no-mac/).

## License

CloudBoost is proprietary software. No permission is granted to copy, modify, distribute, or create derivative works from the code or app without prior written authorization. See [LICENSE](LICENSE).
