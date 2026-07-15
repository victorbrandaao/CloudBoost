# CloudBoost

CloudBoost is a native macOS menu bar app that shows what is happening around a gaming session: latency spikes, jitter, packet loss, Wi-Fi/AWDL noise, VPN routing, background activity, thermal pressure, and local system load.

It does not modify games or promise artificial FPS gains. It helps players run a quieter Mac session, understand a problem, and leave with a useful next step.

<p align="center">
  <a href="https://github.com/victorbrandaao/CloudBoost/releases/latest"><img src="https://img.shields.io/github/v/release/victorbrandaao/CloudBoost?style=flat-square" alt="Latest release"></a>
  <img src="https://img.shields.io/github/downloads/victorbrandaao/CloudBoost/latest/total?label=latest%20release&amp;style=flat-square&amp;color=111111" alt="Latest release downloads">
  <img src="https://img.shields.io/github/downloads/victorbrandaao/CloudBoost/total?label=GitHub%20downloads&amp;style=flat-square&amp;color=111111" alt="All GitHub release downloads">
  <img src="https://img.shields.io/badge/macOS-12%2B-111111?style=flat-square" alt="macOS 12 or later">
  <a href="https://discord.gg/kU5trxtRb"><img src="https://img.shields.io/badge/Discord-support-5865F2?style=flat-square" alt="Discord support"></a>
</p>

<p align="center">
  <img src="./assets/cloudboost-4-2-spike-timeline.png" alt="CloudBoost showing a live Mac gaming session, applied actions, latency, jitter and the spike timeline" width="620">
</p>

## Start Here

- [Download the latest DMG](https://github.com/victorbrandaao/CloudBoost/releases/latest)
- [Visit the website](https://victorbrandaao.github.io/CloudBoost/)
- [Read the Trust Center](https://victorbrandaao.github.io/CloudBoost/trust.html)
- [Join the Discord](https://discord.gg/kU5trxtRb)
- [Get CloudBoost PRO](https://payhip.com/b/Jb0XO)

CloudBoost has passed **1,000 downloads across its distribution channels**. GitHub badges above update automatically for release assets.

## What Happens During A Session

1. **Watch**: CloudBoost samples latency, jitter, packet loss, route state, Wi-Fi/AWDL behavior, thermal pressure, and local load.
2. **Explain**: Session Doctor separates a live issue from an earlier spike and describes the likely cause in plain language.
3. **Act and restore**: CloudBoost applies selected temporary session actions, records what happened, and restores temporary changes when the session ends.

CloudBoost cannot fix an overloaded server, a bad ISP route, a weak router, or a game-engine problem. It can make the Mac side easier to control and diagnose.

## Where It Helps

| Type | Profiles and scenarios |
|---|---|
| Cloud gaming | GeForce NOW, Xbox Cloud Gaming, Boosteroid, Shadow PC |
| Remote play | Moonlight, PS Remote Play, Steam Link, home streaming |
| Native Mac gaming | Dota 2, League of Legends, Steam, Epic Games, Battle.net, local games |
| Compatibility layers | CrossOver, Whisky, Wine, Game Porting Toolkit diagnostics in PRO |

## Free And PRO

Free is a useful manual session tool. PRO adds automation, deeper diagnostics, reports, and support features for regular users.

| Feature | Free | PRO |
|---|:---:|:---:|
| Core cloud, remote play, native Mac, and competitive profiles | Yes | Yes |
| Manual session and Balanced preset | Yes | Yes |
| Basic signal checks and rollback protection | Yes | Yes |
| Test My Setup | Yes | Yes |
| Auto-detect, Auto Boost, and Smart Boost | No | Yes |
| Stability Guard, Heat Guard, and Keep Alive | No | Yes |
| Session Doctor full report, Fix actions, and UDP probe | No | Yes |
| VPN Route Doctor and AWDL Guard+ | No | Yes |
| Spike Timeline, Session Lab, and session history | No | Yes |
| HUD, Stream Signal, and PRO Widgets | No | Yes |
| Session Proof copy/export | No | Yes |
| CrossOver, Whisky, Wine, and GPTK diagnostics | No | Yes |
| Kernel Watch and background throttle | No | Yes |
| Priority Discord support | No | Yes |

**CloudBoost PRO costs $10.** It is a one-time CloudBoost 4.x license, not a subscription.

New purchases use [Payhip](https://payhip.com/b/Jb0XO). Existing Gumroad and legacy PRO+ license keys remain supported in the app.

## Install

### Homebrew

```bash
brew tap victorbrandaao/cloudboost
brew install --cask cloudboost
```

Update later with:

```bash
brew update
brew upgrade --cask cloudboost
```

### DMG

1. Download the latest `CloudBoost_v4.x.dmg` from [GitHub Releases](https://github.com/victorbrandaao/CloudBoost/releases/latest).
2. Open the DMG and drag `CloudBoost.app` to `/Applications`.
3. Open CloudBoost from the macOS menu bar.

The in-app updater downloads the published ZIP, verifies its SHA256 checksum, replaces the app, and relaunches it. The DMG remains available for manual installation.

If macOS reports that the independently distributed app is damaged, clear its quarantine attribute:

```bash
xattr -cr /Applications/"CloudBoost.app"
```

## Current Release: 4.2.2

- Payhip activation repaired while existing Gumroad and legacy PRO+ keys remain supported
- native and compatibility diagnostics now separate measured Mac pressure from unmeasured shader, asset-streaming, engine, and Rosetta/translation stalls
- Session Lab shows Mac-side health first for local games and keeps latency as context
- safer rollback and privileged-action reporting
- updater verifies the staged app signature before replacement
- CPU/process sampling and support reports are more accurate

See the complete notes and checksums on the [release page](https://github.com/victorbrandaao/CloudBoost/releases/latest).

### A note about native-game stutter

CloudBoost can measure macOS pressure, thermal state, power mode, background activity, and network context. It cannot directly measure shader compilation, asset streaming, renderer frame time, game-engine stalls, or Rosetta/translation work. Version 4.2.2 makes that boundary visible in Session Lab instead of treating every stutter as a network problem.

## Public Proof And Support

- Covered by [MacMagazine](https://macmagazine.com.br/post/2026/06/01/cloudboost-otimiza-a-experiencia-de-jogos-na-nuvem-no-mac/)
- Public user feedback is available on the [reviews page](https://victorbrandaao.github.io/CloudBoost/reviews.html)
- The in-app `Review` button opens the public [GitHub review form](https://github.com/victorbrandaao/CloudBoost/issues/new?template=user-review.yml)
- Free and PRO support is available on [Discord](https://discord.gg/kU5trxtRb)

> “Seems to keep my connection more stable on Wi-Fi. On ethernet I never get high ping but it does stop background processes from hurting your ping.”
>
> CloudBoost PRO user on a MacBook Air M4. [Read the full public review](https://github.com/victorbrandaao/CloudBoost/issues/18).

This is one user's experience, not a benchmark or guaranteed result.

## Security And Limits

CloudBoost does not install kernel extensions, hidden daemons, permanent system patches, game injections, or anti-cheat bypasses. Protected temporary actions may ask for the macOS administrator password.

The public repository contains releases, documentation, and binaries, not the full source code. Read the [Trust Center](https://victorbrandaao.github.io/CloudBoost/trust.html) for the exact behavior and permission model.

Some diagnostic and HUD ideas are inspired by [Better xCloud](https://github.com/redphx/better-xcloud) by redphx. CloudBoost does not use Better xCloud code.

<p align="center">
  <a href="https://feitonobrasil.dev.br"><img src="https://selo.feitonobrasil.dev.br/en/serio/colorido/1x.svg" alt="Made in Brazil" height="48" loading="lazy"></a>
</p>

## License

CloudBoost is proprietary software. No permission is granted to copy, modify, distribute, or create derivative works from the code or app without prior written authorization. See [LICENSE](LICENSE).
