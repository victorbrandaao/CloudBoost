# CloudBoost 4.4.0

CloudBoost 4.4.0 focuses on measurable session evidence. It helps separate a local Wi-Fi or router problem from an external route problem, and makes the limits of each measurement visible.

[MIN_VERSION: 4.3.4]

## What changed

- Session Evidence adds a resizable latency and jitter graph, p50 and p95 summaries, threshold markers, confidence labels, PNG export, and a support-ready Session Proof.
- Network Preflight compares the first local hop with the external route. An optional working-conditions test can check responsiveness under load, but CloudBoost will not start that bandwidth test while a game session is active.
- Blocked ICMP is reported as an unavailable sample, not as proof of game packet loss.
- Controller and Game Mode Advisor detects connected controllers and explains Apple Game Mode availability using public macOS APIs.
- The optional browser Stream Bridge reads WebRTC FPS, bitrate, loss, jitter buffer, decode time, freezes, and resolution on supported browser services.
- Stream Bridge binds only to `127.0.0.1`, requires a local token, accepts an allowlist of supported origins, and never modifies the stream.
- Session Lab no longer performs a download load check during an active game session.
- Existing Payhip, Gumroad, and legacy PRO+ licenses keep their access. Pricing is unchanged.

CloudBoost does not modify games, bypass anti-cheat, install a kernel extension, or promise extra FPS. Session evidence is observational and shows correlation, not guaranteed causation.

## Compatibility

CloudBoost 4.4.0 supports Intel and Apple Silicon Macs running macOS 12 Monterey or later. CI built the final universal app and independently verified both the `x86_64` and `arm64` slices.

## Install

Download the DMG, open it, and drag CloudBoost to `/Applications`.

Users on 4.3.2 or 4.3.3 who see a publisher-verification error should install 4.4.0 manually once. Local settings and PRO activation remain stored on the Mac.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://getcloudboost.site/discord/

GitHub Issues: https://github.com/victorbrandaao/CloudBoost/issues

## Checksums

```text
ZIP SHA256: 644412f56a8c2dd848b258ef40526d7b4a136c8c598860e2894d15108035cb28
DMG SHA256: 1a8479f315b6d4d876c8b17f049f2dc096e3ce3bb8d965ff787e35ab9d2cb72b
```
