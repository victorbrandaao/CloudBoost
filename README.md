# CloudBoost

CloudBoost is a native macOS menu bar app for cleaner gaming sessions on Mac.

It helps players start a focused session, reduce local macOS interruptions, and understand the spikes that a normal speed test usually misses: jitter, packet loss, AWDL/Wi-Fi noise, background traffic, thermal pressure, Low Power Mode, and uneven system load.

It is built for cloud gaming, remote play, home streaming, native Mac games, Steam, Epic Games, Battle.net, and PRO diagnostics around CrossOver, Whisky, Wine, and Game Porting Toolkit sessions.

<p align="center">
  <img src="https://img.shields.io/github/v/release/victorbrandaao/CloudBoost?style=for-the-badge">
  <img src="https://img.shields.io/github/downloads/victorbrandaao/CloudBoost/latest/total?label=latest%20release%20downloads&amp;style=for-the-badge&amp;color=2ea44f&amp;v=5">
  <img src="https://img.shields.io/github/downloads/victorbrandaao/CloudBoost/total?label=all-time%20downloads&amp;style=for-the-badge&amp;color=111111&amp;v=2">
  <img src="https://img.shields.io/badge/macOS-12%2B-black?style=for-the-badge">
  <a href="https://discord.gg/kU5trxtRb"><img src="https://img.shields.io/badge/Discord-Support-5865F2?style=for-the-badge"></a>
</p>

<p align="center">
  <a href="https://feitonobrasil.dev.br"><img src="https://selo.feitonobrasil.dev.br/en/serio/colorido/1x.svg" alt="Made in Brazil" height="56" loading="lazy"></a>
</p>

<p align="center">
  <img src="./assets/cloudboost-4-2-spike-timeline.png" alt="CloudBoost 4.2 showing a live Mac gaming session, applied actions, latency, jitter and the spike timeline">
</p>

## Download

Website: [victorbrandaao.github.io/CloudBoost](https://victorbrandaao.github.io/CloudBoost/)

Latest release: [GitHub Releases](https://github.com/victorbrandaao/CloudBoost/releases/latest)

CloudBoost PRO is currently **$10**.

This is the full PRO v4.x license. One-time payment. No subscription. Existing PRO customers keep their access.

Install with Homebrew:

```bash
brew tap victorbrandaao/cloudboost
brew install --cask cloudboost
```

Update with Homebrew:

```bash
brew update
brew upgrade --cask cloudboost
```

Install:

1. Download the latest `CloudBoost_v4.x.dmg`.
2. Open the DMG.
3. Drag `CloudBoost.app` to `/Applications`.
4. Open CloudBoost from the macOS menu bar.

Updates:

- Homebrew installs can be updated with `brew upgrade --cask cloudboost`.
- Manual installs use the DMG from GitHub Releases.
- In-app updates use the verified ZIP asset when available, then replace and relaunch CloudBoost automatically.
- The README counters show both downloads from the latest release and all-time downloads across release assets.

If macOS says the app is damaged, clear quarantine:

```bash
xattr -cr /Applications/"CloudBoost.app"
```

Need help? Join Discord: [discord.gg/kU5trxtRb](https://discord.gg/kU5trxtRb)

Trust Center: [what CloudBoost does, does not do, and can ask permission for](https://victorbrandaao.github.io/CloudBoost/trust.html)

Guides: [Mac gaming setup notes by service and game](https://victorbrandaao.github.io/CloudBoost/guides.html)

AI-readable summary: [CloudBoost AI Summary](https://victorbrandaao.github.io/CloudBoost/ai-summary.html)

## What CloudBoost Is

CloudBoost is not a magic FPS booster.

It does not modify games, inject code, bypass anti-cheat, edit CrossOver bottles, or install kernel extensions.

It focuses on the Mac session around the game:

- starts and stops focused gaming sessions
- applies temporary macOS session tuning
- watches latency, jitter, packet loss, route behavior, Wi-Fi path, and local pressure
- explains likely spike causes in plain language
- restores temporary changes when the session ends

## Supported Profiles

Core profiles are free. CrossOver/Whisky diagnostics are part of PRO because they add compatibility-layer checks and deeper local bottleneck guidance.

| Profile | Plan |
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
| CrossOver / Windows Games | PRO |

## Free vs PRO

Free is for trying CloudBoost and running manual sessions.

PRO is for people who use it regularly and want deeper diagnostics, automation, reports, widgets, and priority support.

| Feature | Free | PRO |
|---|---:|---:|
| Cloud, remote play, native Mac, and competitive profiles | Yes | Yes |
| Manual session mode | Yes | Yes |
| Balanced preset | Yes | Yes |
| Basic signal checks | Yes | Yes |
| Rollback protection | Yes | Yes |
| Auto-detect and Auto Boost | No | Yes |
| Smart Boost and Stability Guard | No | Yes |
| Test My Setup quick check | Yes | Yes |
| What CloudBoost did checklist | Basic | Full |
| Session Doctor Fix actions | No | Yes |
| Fastest and Smooth presets | No | Yes |
| HUD | No | Yes |
| Session Doctor full reports with UDP probe | No | Yes |
| VPN Route Doctor | No | Yes |
| Session Lab | No | Yes |
| Stream Signal | No | Yes |
| PRO Widgets | No | Yes |
| Session end report | No | Yes |
| Heat Guard and Keep Alive | No | Yes |
| Session Proof copy/export for Discord and GitHub support | No | Yes |
| Kernel Watch and background throttle | No | Yes |
| CrossOver, Whisky, Wine, and GPTK diagnostics | No | Yes |
| Priority Discord support | No | Yes |

CloudBoost PRO is currently **$10**.

This is the full PRO v4.x license. One-time payment. No subscription.

Unlock PRO: [Payhip](https://payhip.com/b/Jb0XO)

Payhip is the checkout for new purchases. Existing Gumroad license keys remain supported inside the app.

Existing PRO customers keep access to the expanded PRO feature set. The previous PRO+ feature set has been folded into PRO.

## What It Helps With

CloudBoost is useful when the game itself is not the only problem.

Common cases:

- GeForce NOW feels smooth, then suddenly spikes
- Xbox Cloud Gaming or Boosteroid has jitter bursts on Mac
- Shadow PC or remote PC streaming feels inconsistent on macOS
- PS Remote Play, Moonlight, or Steam Link feels inconsistent
- Steam or Epic keeps downloading, syncing, overlaying, or scanning during a session
- Dota 2, League, or a native Mac game stutters when macOS is under pressure
- CrossOver or Whisky sessions need local Mac-side diagnostics
- Wi-Fi/AWDL, AirDrop, Handoff, VPN routing, backups, sync tools, thermal pressure, or Low Power Mode interfere with a session

CloudBoost cannot fix a bad router, bad ISP route, overloaded game server, or remote machine problem. It gives you a cleaner local session and better information when something feels off.

## Version 4.2.0

Version 4.2.0 makes the session view easier to read and turns spike history into something players can actually use. It also moves new PRO purchases to Payhip while preserving every existing Gumroad license.

Highlights:

- new local Spike Timeline records confirmed latency, jitter, packet-loss, thermal, VPN, and background-activity events
- current session health is clearly separated from earlier spikes, so a recovered connection no longer looks broken
- Session Lab keeps the before/after comparison visible in Session Doctor details
- Session actions now separates changes CloudBoost applied from checks that still need the player
- optional alerts fire once for newly confirmed severe spikes instead of repeating the same warning
- session-end reports include the Timeline summary
- cleaner visual hierarchy, solid primary action, tighter cards, and the session action above the PRO offer
- Payhip is now the primary checkout and license-validation path for new purchases
- existing Gumroad and legacy PRO+ keys continue to validate and unlock the complete PRO plan

- Review button now opens the public GitHub review form
- Session end review prompt now asks for useful Mac/game/network details
- README and website now point users to public reviews, Discord support, and the current PRO price
- new VPN Route Doctor for PRO diagnostics
- detects common VPN/tunnel tools and flags when the default route is going through a tunnel
- Session Doctor now explains VPN-related UDP blocks, route latency, packet loss, and jitter more clearly
- Path status can show `VPN` when the active gaming route is tunneled
- Session Proof and diagnostics exports now include VPN status and split-tunneling guidance
- new README, website, and social images built from real app screenshots
- Payhip/Mercado Pago is the primary checkout for new purchases while Gumroad remains available for existing customers
- in-app updater now requires a published SHA256 checksum before installing or opening a downloaded package
- Gumroad license validation now handles encoded product IDs and temporary server errors more safely
- Background Traffic wording is clearer about what CloudBoost can pause, what it can throttle, and what must be paused inside the sync app itself
- What CloudBoost did now separates verified actions from requested actions when macOS accepts a privileged session change
- CrossOver / Windows Games is now treated as a compatibility-layer profile instead of a native Mac profile in Session Lab and Stream Signal
- anonymous telemetry avoids duplicate first-run `app_opened` events
- telemetry failure logs are cleaner for Session Proof reports
- release script now writes `.release/checksums.md` so ZIP/DMG checksums are harder to forget
- new PRO `Proof` action that copies a clean Session Proof report for Discord or GitHub Issues
- support report includes profile, preset, session state, Session Doctor, Session Lab, before/after summary and recent CloudBoost events
- new Trust Center page explaining what CloudBoost does, does not do, and when macOS may ask for administrator permission
- new public guides for GeForce NOW, PS Remote Play, Dota 2, CS2, CrossOver/Whisky and Moonlight-style remote sessions
- What CloudBoost did panel with applied actions and manual checks
- Test My Setup quick check before starting a session
- Session Doctor Fix button for temporary session actions
- clearer Can Fix / Manual Check wording in Session Doctor
- before/after summary inside Session Lab
- PRO session end report with score, duration, main issue, trend, and next step
- preset descriptions for Fastest, Balanced, and Smooth
- CrossOver / Windows Games profile in PRO
- detection for CrossOver, Whisky, Wine, and GPTK sessions
- macOS-side pressure checks for compatibility-layer gaming
- ZIP-based in-app updater with staged install and relaunch
- DMG remains available for manual installs
- clearer Session Lab and Stream Signal guidance
- public Free profiles remain available for cloud, remote play, native Mac, and competitive sessions
- former PRO+ tools are now included in PRO

## Support

Discord is the fastest place for setup help, license support, bug reports, screenshots, and feature requests:

[discord.gg/kU5trxtRb](https://discord.gg/kU5trxtRb)

When asking for help, include:

- macOS version
- Mac model
- selected profile
- Wi-Fi or Ethernet
- VPN/firewall/private relay status
- screenshot of Session Doctor or Session Lab
- Session Proof report copied from the app when using PRO

The Session Proof report does not include license keys, personal files, hostnames, or browser history.

## Reviews

CloudBoost uses public GitHub feedback instead of hidden testimonials.

The in-app `Review` button opens the same public GitHub review form. Leave a review if you have used the app and can share useful details:

- Free or PRO
- Mac model and macOS version
- game or service tested
- Wi-Fi or Ethernet
- what improved, what did not, and what was confusing

Leave a review: [GitHub review form](https://github.com/victorbrandaao/CloudBoost/issues/new?template=user-review.yml)

Read reviews: [CloudBoost reviews page](https://victorbrandaao.github.io/CloudBoost/reviews.html)

### First public feedback

> “Seems to keep my connection more stable on Wi-Fi. On ethernet I never get high ping but it does stop background processes from hurting your ping. Don't do many reviews but this one is worth it.”
>
> CloudBoost PRO user on a MacBook Air M4, macOS 26.5.2, using Shadow PC over Wi-Fi and Ethernet. [Read the public review](https://github.com/victorbrandaao/CloudBoost/issues/18).

This is one user's report, not a benchmark or a guaranteed result. More setup-specific feedback is welcome.

## Security And Limits

CloudBoost is proprietary software. The public repository contains releases, documentation, and downloadable binaries, not the full source code.

CloudBoost does not install KEXTs, hidden daemons, permanent system patches, game injections, or anti-cheat bypasses. Some actions may ask for administrator permission because macOS requires it for temporary system-level session changes.

Read the Trust Center: [victorbrandaao.github.io/CloudBoost/trust.html](https://victorbrandaao.github.io/CloudBoost/trust.html)

Some diagnostics and HUD ideas are inspired by [Better xCloud](https://github.com/redphx/better-xcloud) by redphx. CloudBoost does not use Better xCloud code.

CloudBoost was covered by [MacMagazine](https://macmagazine.com.br/post/2026/06/01/cloudboost-otimiza-a-experiencia-de-jogos-na-nuvem-no-mac/).

## License

CloudBoost is proprietary software. No permission is granted to copy, modify, distribute, or create derivative works from the code or app without prior written authorization. See [LICENSE](LICENSE).
