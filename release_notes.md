CloudBoost 4.0.1 is focused on stability, trust, and clearer macOS gaming diagnostics.

This release does not change the Free, PRO, or PRO+ access model. Existing PRO customers keep their current access. The goal is to make CloudBoost easier to understand while improving the tools already in the app for cloud gaming, remote play, and native Mac gaming sessions.

### What's New

* **Safer session restore:** CloudBoost now restores temporary macOS gaming-session changes more reliably if the app closes during an active session.
* **Clearer privileged diagnostics:** the log now shows more detail about what macOS accepted when CloudBoost applies system-level session tuning.
* **Stricter temporary guard files:** AWDL Guard and PRO+ Kernel Access heartbeat files now use a more private temporary location and tighter permissions.
* **Checksum-ready updater:** update downloads can validate a SHA-256 checksum when the GitHub release provides one.
* **Cleaner store configuration:** Gumroad URLs can be configured without breaking existing PRO or PRO+ licenses.
* **Layout resilience:** the app layout is less fragile for future UI changes.
* **Website and README cleanup:** the public page and README now explain CloudBoost as a macOS gaming optimizer for GeForce NOW, Xbox Cloud Gaming, PS Remote Play, Moonlight, Steam Link, and native Mac gaming without overpromising.

### PRO And PRO+

PRO remains focused on automation and diagnostics: Auto Boost, Auto-Detect, Smart Boost, Stability Guard, AWDL Guard+, Session Doctor, Session Lab, Stream Signal, PRO Widgets, Heat Guard, Keep Alive, advanced presets, before/after history, and Session Proof export.

PRO+ Kernel Access remains a separate one-time US$25 upgrade for Kernel Watch, background throttle, priority Discord support, early builds, and future lower-level networking work.

### Installation

Download **CloudBoost_v4.0.1.dmg** from the Assets section, open it, and drag **CloudBoost.app** to `/Applications`.

If macOS shows an "App is damaged" warning on first launch, open Terminal and run:

```bash
xattr -cr /Applications/"CloudBoost.app"
```

### Support

If something is confusing, broken, or unclear, please report it. Screenshots help.

GitHub Issues and Discord are both supported:

https://discord.gg/kU5trxtRb

Useful details: macOS version, Mac model, selected profile, Wi-Fi/Ethernet status, VPN/firewall/private relay status, and what Session Doctor or Session Lab is showing.

### Note

CloudBoost does not modify games, inject code, bypass anti-cheat, or install kernel extensions. It focuses on temporary macOS session tuning and diagnostics around cloud, remote play, and native Mac gaming.
