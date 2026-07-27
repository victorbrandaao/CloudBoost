# CloudBoost 4.3.4

CloudBoost 4.3.4 focuses on clearer navigation, useful PRO evidence, safer updates, and cleaner authorization.

## What changed

- Play, Diagnose, PRO, and Settings keep the active session separate from advanced controls.
- Completed PRO sessions are stored locally per profile, including p95 latency, jitter, threshold events, and comparison with the previous run.
- Session History, Session Proof, diagnostics export, support, and rollback information now share one PRO workspace.
- Free receives one complete diagnostic preview after a meaningful session.
- Later upgrade prompts use the selected game or service and captured events, respect a three-session gap, and pause for seven days after Continue Free.
- Privileged session actions are grouped into one authorization request.
- Session stop asks existing watchdogs to restore AWDL and process priority, verifies the result, and requests a fallback password only if automatic rollback fails.
- Cancelling the first administrator dialog no longer causes another password dialog when no changes were applied.
- Keep Alive uses a native macOS power assertion and does not require Accessibility access.
- Session Lab captures its baseline before temporary tuning.
- Detached update signatures retry without cache and can fall back to the official GitHub asset API. The update is still rejected unless its Ed25519 signature is valid.
- Partial network samples with undefined jitter are ignored instead of terminating the app.
- Existing Payhip, Gumroad, and legacy PRO+ licenses keep their access.

CloudBoost does not modify games, bypass anti-cheat, install a kernel extension, or promise extra FPS. It observes and temporarily tunes the local Mac side of a gaming session.

## Install

CloudBoost 4.3.4 supports Intel and Apple Silicon Macs running macOS 12 Monterey or later.

Download the DMG, open it, and drag CloudBoost to `/Applications`.

If CloudBoost 4.3.2 reports that it could not verify who published the update, install 4.3.4 manually from this official release once. Your local settings and PRO activation remain stored on the Mac.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://discord.gg/kU5trxtRb

## Checksums

```text
ZIP SHA256: a7ec382dc2ff3ee2faf8942f7e4811ec824f78ff8b2cd00c7c370885f1baa815
DMG SHA256: 069afb6028d9c782515af71dffdbdecf6df3b871429c9d918669b4b356cafa89
```
