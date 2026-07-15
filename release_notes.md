# CloudBoost 4.2.3

CloudBoost 4.2.3 makes the review and feedback flow less intrusive and easier to verify publicly.

## What changed

- The app waits for five completed sessions lasting at least three minutes before asking for a review.
- Free and PRO users can leave a public GitHub review, send private feedback through Discord, or choose `Not Now`.
- `Not Now` postpones the request for another three completed sessions.
- PRO users receive one end-of-session dialog instead of a report immediately followed by a review request.
- Review prompt events respect the existing Anonymous Stats setting.
- The new public Results page explains Session Lab's measurement method, current evidence, limitations, and setup-specific reports.
- A structured GitHub form accepts positive, neutral, and negative session results with enough context to compare setups.

The diagnostic and activation fixes from 4.2.2 remain included. CloudBoost does not modify games, bypass anti-cheat, install kernel extensions, or promise universal performance gains.

## Install

Download the DMG, open it, and drag CloudBoost to `/Applications`. Existing users can also use the in-app updater after 4.2.3 is published.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://discord.gg/kU5trxtRb

Public results and measurement method: https://victorbrandaao.github.io/CloudBoost/results.html

## Checksums

```text
ZIP SHA256: eda2c71038773fba9a5e105743bab6907dd15240ea22436d89128838e4b9c78a
DMG SHA256: 1b7ce598ed019783b45ccee93cd5a6a9b3432ee19a518cf57974a922d807b13d
```
