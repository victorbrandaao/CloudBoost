CloudBoost 3.1.7 adds PRO Widgets and continues the cleanup around diagnostics, native Mac gaming profiles, and support visibility.

### What's New in 3.1.7

* **PRO Widgets:** PRO users now get compact live cards for stability, network, and system state while a session is running.
* **Native Mac gaming focus:** Dota 2, League of Legends, Steam, Epic Games, Battle.net, CS2 remote/cloud, and Local Game profiles are treated as gaming stability profiles instead of cloud-only profiles.
* **Clearer diagnostics:** Session Doctor and Session Lab now explain stability issues in plainer language, with less truncated text and more visible actions.
* **Jitter in milliseconds:** Jitter now appears as values such as `0ms` or `4ms`, instead of the old `j0` style.
* **Better help inside the app:** CPU, Ping, Jitter, Path, Health, Trend, AWDL, Session Doctor, Session Lab, and PRO Widgets include hover explanations.
* **Discord support links:** Details panels and the app Info dialog now make the CloudBoost Discord easier to find for Free and PRO users.

### PRO

Existing PRO licenses continue to work. The game and streaming profiles remain free. PRO is still focused on automation and diagnostics: Auto Boost, Auto-Detect, Smart Boost, Stability Guard, Session Doctor, Session Lab, PRO Widgets, UDP Probe, Session Score, Heat Guard, Keep Alive, advanced presets, and before/after session history.

### Installation

Download **CloudBoost_v3.1.7.dmg** from the Assets section, open it, and drag **CloudBoost.app** to `/Applications`.

If macOS shows an "App is damaged" warning on first launch, open Terminal and run:

```bash
xattr -cr /Applications/"CloudBoost.app"
```

### Official Support

The CloudBoost Discord is the official support channel for this release. It is open to Free and PRO users for install help, setup questions, issue reports, release updates, feature requests, and PRO license support:

https://discord.gg/kU5trxtRb

If you report a problem, include your macOS version, Mac model, selected profile, Wi-Fi/Ethernet status, and what Session Doctor or Session Lab is showing.

### Important Note

CloudBoost is not an FPS booster and does not modify games, bypass anti-cheat, inject code, or install kernel extensions. For native Mac games, the goal is reducing local macOS interruptions and explaining stability problems such as background sync, thermal pressure, Low Power Mode, AWDL/Wi-Fi noise, and session pressure.
