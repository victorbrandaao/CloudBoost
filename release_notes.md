# CloudBoost 4.3.5

CloudBoost 4.3.5 is a maintenance release for the updater, release pipeline, telemetry, and internal UI structure.

[MIN_VERSION: 4.3.4]

## What changed

- Detached signatures still retry without cache and fall back to the official GitHub asset API.
- The release pipeline now verifies the DMG and ZIP update signatures independently before publication.
- Artifact builds resolve and validate the release version consistently, including manual workflow runs.
- Anonymous telemetry labels production, preview, and development builds so commercial dashboards can exclude tests without deleting raw events.
- Trusted signature routes, fallback order, retries, and build-channel classification have dedicated automated coverage.
- Reusable popover controls were separated internally without changing the visible feature set or navigation.
- Existing Payhip, Gumroad, and legacy PRO+ licenses keep their access.

CloudBoost does not modify games, bypass anti-cheat, install a kernel extension, or promise extra FPS. It observes and temporarily tunes the local Mac side of a gaming session.

## Install

CloudBoost 4.3.5 supports Intel and Apple Silicon Macs running macOS 12 Monterey or later.

Download the DMG, open it, and drag CloudBoost to `/Applications`.

If CloudBoost 4.3.2 or 4.3.3 reports that it could not verify who published the update, install 4.3.5 manually from this official release once. Your local settings and PRO activation remain stored on the Mac.

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
ZIP SHA256: d73ac8639ed6189fec9be69641a762602b5f7f1b15d0f2e3d7673565a189b3ba
DMG SHA256: 0d25ecf11d5389140bf0734928e1c350b22f8cb96a0023d6205489ddf8f22622
```
