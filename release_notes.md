# CloudBoost 4.4.5

Choose your game or service, select a mode, and start from one session panel.

[MIN_VERSION: 4.3.4]

## What changed

- Game/service and mode selectors now sit next to Start Session.
- Navigation stays visible while scrolling, and switching tabs returns to the top.
- Ready, preparing, active, and restoring states explain what the app is doing.
- Profile and mode changes are blocked during session transitions.
- The session panel includes a shortcut to the three-session PRO trial.
- The download page shows the actual app interface, explains the trial, and includes copyable Homebrew install/update commands.
- Release publishing synchronizes current site versions and the public Homebrew cask from checksummed release metadata.

## Installation and compatibility

Download the DMG and drag CloudBoost to Applications, replacing the previous copy. Existing settings and PRO activation are preserved. Requires macOS 12 Monterey or later; supports Intel and Apple Silicon.

If an older updater cannot verify the publisher, install this official DMG manually once.

## Distribution

CloudBoost retains its existing ad-hoc macOS signing model; this release is not Developer ID signed or notarized. Both update archives are independently signed with Ed25519 and verified by CloudBoost before installation.
