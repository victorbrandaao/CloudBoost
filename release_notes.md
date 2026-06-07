CloudBoost 3.1.4 adds focused competitive game profiles on top of the 3.1 stability layer.

### What's New in 3.1.4

* **Competitive game profiles:** Added focused profiles for Counter-Strike 2, League of Legends, and Dota 2.
* **CS2 cloud/remote profile:** Counter-Strike 2 is treated as a cloud/remote-first profile on macOS because modern CS2 does not have a native macOS release.
* **League and Dota local/cloud profiles:** League of Legends and Dota 2 now get their own process targeting, profile labels, and launch behavior.
* **Game-aware Session Score:** Session Doctor now uses stricter latency and jitter thresholds for FPS/MOBA sessions.
* **FPS/MOBA mouse profiles:** CS2 keeps the raw FPS mouse profile; League and Dota use a MOBA-oriented mouse profile.
* **Safer competitive tuning:** Competitive game profiles avoid memory purge hitches while still reducing local session noise.
* **Session Doctor:** CloudBoost now explains likely lag-spike causes in plain language, including background traffic, jitter, packet loss, Wi-Fi/AWDL behavior, thermal pressure, and Low Power Mode.
* **UDP Probe:** PRO diagnostics include a lightweight UDP-based probe so the app is not relying only on TCP-style latency checks.
* **Free profiles remain free:** All cloud, Mac, and competitive game profiles remain available in the free version.

### Installation

1. Go to the **Assets** section below and download **CloudBoost_v3.1.4.dmg**.
2. Open the `.dmg` and drag **CloudBoost.app** to your `/Applications` folder.

> **Note on macOS Gatekeeper:**
> Because this is an independently signed tool, macOS might show an "App is damaged" warning on first launch. To clear the quarantine flag, open Terminal and run:
> ```bash
> xattr -cr /Applications/"CloudBoost.app"
> ```

### Free vs PRO

The free version includes all cloud gaming, Mac gaming, and competitive game profiles, manual session mode, Balanced mode, AWDL Guard rollback protection, and basic session status.

CloudBoost PRO unlocks Auto-Detect, Auto Boost, Smart Boost, Stability Guard, game-aware Session Doctor with UDP Probe, Session Score, Heat Guard, Keep Alive, Competitive and Smooth presets, diagnostics export, and before/after session history.

Existing PRO customers keep access to the PRO features they already purchased.
