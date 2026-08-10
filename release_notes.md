# CloudBoost 4.3.7

CloudBoost 4.3.7 is a reliability and maintainability release for session metrics and universal Mac support.

[MIN_VERSION: 4.3.4]

## What changed

- Delayed network and system samples no longer repopulate the interface after Stop Session.
- Diagnostics and self-tests now report the running architecture for clearer support on Intel and Apple Silicon Macs.
- Release packaging independently verifies the `arm64` and `x86_64` builds before creating the universal app.
- Continuous integration extracts and validates both slices of the final binary and keeps macOS 12 Monterey as the minimum version.
- Application and popover controllers were reorganized internally so future session and interface fixes can be reviewed in smaller, focused files.
- Existing Payhip, Gumroad, and legacy PRO+ licenses keep their access. Pricing and plan entitlements are unchanged.

CloudBoost does not modify games, bypass anti-cheat, install a kernel extension, or promise extra FPS. It observes and temporarily tunes the local Mac side of a gaming session.

## Install

CloudBoost 4.3.7 supports Intel and Apple Silicon Macs running macOS 12 Monterey or later.

Download the DMG, open it, and drag CloudBoost to `/Applications`.

If CloudBoost 4.3.2 or 4.3.3 reports that it could not verify who published the update, install 4.3.7 manually from this official release once. Your local settings and PRO activation remain stored on the Mac.

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
ZIP SHA256: c9656e6eb9ae42ac76b6967d4645ac77aa51b8a3f5f7b80198008d6b21231cdd
DMG SHA256: dcaa5f536551bc032415e4c1b81da3c5931adc6adee79a14c95a268fe3fd9be6
```
