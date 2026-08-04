# CloudBoost 4.3.6

CloudBoost 4.3.6 is a reliability release for license activation, updates, and privileged session actions.

[MIN_VERSION: 4.3.4]

## What changed

- Payhip and existing Gumroad keys now use the same server-side one-Mac activation protection.
- CloudBoost reports a secure-storage error if macOS Keychain cannot save a validated license instead of showing a temporary false activation.
- Manual update checks now explain GitHub HTTP and malformed-response failures.
- A verified update is no longer rolled back only because the app takes longer to relaunch. The helper waits up to 30 seconds and opens the app for the signed-in macOS user.
- Session Fix now separates fully verified changes from partial results that still need attention.
- Continuous integration packages and checks both `arm64` and `x86_64` architectures and enforces macOS 12 Monterey as the minimum version.
- Existing Payhip, Gumroad, and legacy PRO+ licenses keep their access.

CloudBoost does not modify games, bypass anti-cheat, install a kernel extension, or promise extra FPS. It observes and temporarily tunes the local Mac side of a gaming session.

## Install

CloudBoost 4.3.6 supports Intel and Apple Silicon Macs running macOS 12 Monterey or later.

Download the DMG, open it, and drag CloudBoost to `/Applications`.

If CloudBoost 4.3.2 or 4.3.3 reports that it could not verify who published the update, install 4.3.6 manually from this official release once. Your local settings and PRO activation remain stored on the Mac.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://discord.gg/kU5trxtRb

GitHub Issues: https://github.com/victorbrandaao/CloudBoost/issues

## Checksums

```text
ZIP SHA256: 108f4086101bd1a656dd05c9bba1ffc6a33efee2a0a1e6436f426118d60eb458
DMG SHA256: accaf4da6ff55bb3bd8a0d2013ae43d009a0bfdd83f19a1a45f921543bc1ccbd
```
