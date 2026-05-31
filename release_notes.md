CloudBoost 3.1.1 refines the new Mac gaming release with clearer PRO value, restored footer controls, better diagnostics, and a more honest stability-focused positioning.

### What's New in 3.1.1

* **Footer controls restored:** Info, PRO or Log, Update, and Quit are all visible in the app footer.
* **Scrollable popover:** The app can scroll to the bottom on smaller displays instead of cutting off controls.
* **Clearer PRO upsell:** Free keeps every cloud and Mac gaming profile. PRO is focused on automation, stability monitoring, and hands-off session tools.
* **Before/after diagnostics:** PRO diagnostics now include a session start vs current-state summary.
* **Telemetry diagnostics:** Anonymous usage stats remain opt-in, and failed Supabase requests now show useful diagnostics in the app log.
* **Network wording cleanup:** CloudBoost is described as reducing local macOS session interference, not routing, proxying, or converting game traffic.
* **Existing PRO customers protected:** Current subscribers keep access to the PRO features they already purchased.

### Installation

1. Download **CloudBoost_v3.1.1.dmg** from the Assets section.
2. Open the DMG and drag **CloudBoost.app** to `/Applications`.

If macOS shows an "App is damaged" warning on first launch, clear the quarantine flag:

```bash
xattr -cr /Applications/"CloudBoost.app"
```

### Free vs PRO

The free version includes all supported cloud and Mac gaming profiles, manual boost, Balanced preset, AWDL Guard rollback protection, and basic system optimization.

CloudBoost PRO unlocks automation and advanced add-ons: Auto-Detect, Auto Boost, Smart Boost, Stability Guard, Heat Guard, Keep Alive, diagnostics export, before/after session history, and advanced presets.

Existing PRO customers keep access to every PRO feature they already purchased.

### System Modifications

CloudBoost may request administrator privileges during a session to apply supported macOS system changes:

* Temporarily control AWDL (`awdl0`) to reduce Wi-Fi scanning spikes.
* Flush DNS cache for cleaner routing.
* Increase selected game or streaming client process priority with `renice`.
* Pause Time Machine activity in selected presets.
* Run `caffeinate` to prevent sleep and throttling.
* Reduce local macOS network interference without routing, proxying, or converting game traffic.

All session changes are designed to be reverted when CloudBoost is disabled or when the app quits.
