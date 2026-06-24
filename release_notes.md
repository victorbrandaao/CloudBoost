CloudBoost 3.1.11 is a PRO diagnostics and in-game readability update.

### What's New in 3.1.11

* **Stream Signal:** Session Lab now produces a separate stream/native stability score based on p95 latency, jitter, packet loss, load impact, UDP availability, thermal state, Low Power Mode, and background interference.
* **HUD Quality Glance:** The floating HUD now shows a compact OK/CHK/FIX quality read and follows the app UI size setting.
* **Better Session Lab details:** The Session Lab card now explains the score, current signal, suggested mode, and platform-specific checklist instead of showing vague static text.
* **Session Proof 2.0:** Diagnostics now include p95 latency in the proof report, which is more useful for spike complaints than average ping alone.
* **Background traffic clarity:** Session Doctor now explains what CloudBoost can control directly, such as Time Machine, and what should be paused inside the original app, such as iCloud Drive, Dropbox, OneDrive, Photos, or Spotlight.
* **Less noisy background detection:** Sync/indexing warnings now require stronger or sustained activity before being shown.
* **HUD scaling:** UI size options now also resize the floating HUD for external monitors.

### PRO

Existing PRO licenses continue to work. Free keeps all cloud, remote play, native Mac, and competitive profiles unlocked. PRO remains focused on automation and diagnostics: Auto Boost, Auto-Detect, Smart Boost, Stability Guard, Session Doctor, Session Lab, Stream Signal, PRO Widgets, UDP Probe, Session Score, Heat Guard, Keep Alive, advanced presets, before/after session history, and Session Proof export.

PRO+ Kernel Access remains a separate one-time US$25 upgrade for Kernel Watch, background throttle, AWDL Guard+, priority Discord support, early builds, and future signed lower-level networking work.

### Credits

Some Session Lab and HUD ideas are inspired by Better xCloud by redphx, especially its clear stream stats and player-focused troubleshooting approach. CloudBoost does not use Better xCloud code and focuses on native macOS session diagnostics.

https://github.com/redphx/better-xcloud

### Installation

Download **CloudBoost_v3.1.11.dmg** from the Assets section, open it, and drag **CloudBoost.app** to `/Applications`.

If macOS shows an "App is damaged" warning on first launch, open Terminal and run:

```bash
xattr -cr /Applications/"CloudBoost.app"
```

### Official Support

The CloudBoost Discord is an official support channel for this release, alongside GitHub Issues. It is open to Free and PRO users for install help, setup questions, issue reports, release updates, feature requests, and PRO license support:

https://discord.gg/kU5trxtRb

If you report a problem, include your macOS version, Mac model, selected profile, Wi-Fi/Ethernet status, and what Session Doctor or Session Lab is showing.

### Important Note

CloudBoost is not an FPS booster and does not modify games, bypass anti-cheat, inject code, or install kernel extensions. For native Mac games, the goal is reducing local macOS interruptions and explaining stability problems such as background sync, thermal pressure, Low Power Mode, AWDL/Wi-Fi noise, and session pressure.
