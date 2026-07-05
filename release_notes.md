CloudBoost 4.1 focuses on clearer diagnostics for real Mac gaming setups.

This release adds VPN-aware checks, cleaner support reports, updated app images, and a safer license path while keeping Gumroad as the main checkout. Existing PRO customers keep their access.

### What's New

* **VPN Route Doctor:** CloudBoost can now detect common VPN/tunnel setups and explain when a route, UDP check, packet loss, or jitter issue may be VPN-related.
* **Clearer Session Doctor wording:** VPN-related issues are called out as route, UDP, packet loss, or jitter problems instead of generic network warnings.
* **Better support reports:** Session Proof and diagnostics exports now include VPN status and split-tunneling guidance.
* **Cleaner public images:** README, website, and social preview images now use real app screenshots from the current interface.
* **License fallback path:** Gumroad remains the main checkout. Payhip/Mercado Pago license validation is available as a fallback path for new purchases.
* **PRO feature set stays unified:** former PRO+ tools remain included in PRO.

### Free And PRO

Free includes core cloud, remote play, native Mac, and competitive profiles, manual session mode, Balanced preset, basic signal checks, Stream Advisor, and rollback protection.

PRO adds Auto Boost, Auto-Detect, Smart Boost, Stability Guard, HUD, AWDL Guard+, Session Doctor full reports, VPN Route Doctor, UDP Probe, Session Lab, CrossOver/Whisky diagnostics, Stream Signal, PRO Widgets, Heat Guard, Keep Alive, Fastest/Smooth presets, before/after history, Session Proof export, Kernel Watch, background throttle, priority Discord support, and early builds.

### Installation

Download **CloudBoost_v4.1.dmg** from the Assets section, open it, and drag **CloudBoost.app** to `/Applications`.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

If macOS shows an "App is damaged" warning on first launch, open Terminal and run:

```bash
xattr -cr /Applications/"CloudBoost.app"
```

### Checksums

```text
ZIP SHA256: c905c70629519636bd89482534a9886acb0cf65f394000d4dcc272ee7fa4147e
DMG SHA256: 948454c9a1e2f6cb7aba0c69eb3b8860aa58f15922ff967e1ec39ac54279c12c
```

### Support

If something is confusing, broken, or unclear, please report it. Screenshots help.

Discord:
https://discord.gg/kU5trxtRb

Useful details: macOS version, Mac model, selected profile, Wi-Fi/Ethernet status, VPN/firewall/private relay status, and what Session Doctor or Session Lab is showing.

### Note

CloudBoost does not modify games, inject code, bypass anti-cheat, edit CrossOver bottles, or install kernel extensions. It focuses on temporary macOS session tuning and diagnostics around cloud, remote play, native Mac gaming, and Windows compatibility sessions on Mac.
