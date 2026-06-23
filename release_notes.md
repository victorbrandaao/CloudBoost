CloudBoost 3.1.10 is a readability, Remote Play, and PRO diagnostics update.

### What's New in 3.1.10

* **Larger UI for external displays:** CloudBoost now has UI Size modes: Auto, Small, Large, and XL. Auto uses a larger popover on high-resolution displays, and XL can be selected manually.
* **PS Remote Play profile:** PS Remote Play is now included as a free remote-play profile alongside Moonlight and VoidLink.
* **Cleaner platform groups:** Cloud profiles, remote play profiles, competitive/native profiles, and Mac launcher profiles are separated more clearly.
* **Session Proof report:** PRO diagnostics now include a shareable session summary with start/latest state, trend, jitter, packet loss, and main background issues.
* **Cleaner session history:** Starting a new session now resets the before/after baseline, so reports are tied to the current session instead of older samples.

### PRO

Existing PRO licenses continue to work. The game, streaming, and remote-play profiles remain free. PRO remains focused on automation and diagnostics: Auto Boost, Auto-Detect, Smart Boost, Stability Guard, Session Doctor, Session Lab, PRO Widgets, UDP Probe, Session Score, Heat Guard, Keep Alive, advanced presets, before/after session history, and Session Proof export.

PRO+ Kernel Access remains a separate one-time US$25 upgrade for Kernel Watch, background throttle, AWDL Guard+, priority Discord support, early builds, and future signed lower-level networking work.

### Installation

Download **CloudBoost_v3.1.10.dmg** from the Assets section, open it, and drag **CloudBoost.app** to `/Applications`.

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
