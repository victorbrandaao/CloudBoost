# CloudBoost 4.4.3

CloudBoost 4.4.3 completes the fix for repeated Keychain password prompts after an update, especially on macOS 12 Monterey.

[MIN_VERSION: 4.3.4]

## What changed

- CloudBoost performs zero Keychain reads, writes, or deletes during license startup.
- Automatic legacy migration has been removed from launch. The previous non-interactive Security query could still display one password dialog per old item on Monterey.
- Existing customers can recover an older license only from `PRO > Recover earlier PRO`, after explicit confirmation.
- Legacy Keychain entries are left untouched because trying to remove them can also trigger authorization dialogs on older macOS versions.
- Active licenses in CloudBoost's machine-bound local vault continue to restore normally.
- A packaged self-test now fails if `ProManager` initialization touches the Keychain.
- Publisher-signature verification, complete draft publishing, and the three authenticated update routes from 4.4.2 remain active.
- Existing Payhip, Gumroad, and legacy PRO+ licenses keep their access. Pricing and plan entitlements are unchanged.

## Important upgrade note

If an older CloudBoost build still shows `CloudBoost could not verify who published this update`, install 4.4.3 manually once from the official DMG. Drag CloudBoost to Applications and replace the existing copy.

Opening CloudBoost must not display a Keychain password prompt. If an older PRO license is not restored automatically, open the PRO screen and choose `Recover earlier PRO`. That intentional recovery may request access to the old license and device entries once each.

## Compatibility

CloudBoost 4.4.3 supports Intel and Apple Silicon Macs running macOS 12 Monterey or later. The release workflow built and verified both architecture slices and passed all 58 automated tests.

## Install

Download the DMG, open it, and drag CloudBoost to `/Applications`.

Homebrew users can update with:

```bash
brew update
brew upgrade --cask cloudboost
```

## Support

Discord: https://getcloudboost.site/discord/

GitHub Issues: https://github.com/victorbrandaao/CloudBoost/issues

## Verification

```text
ZIP SHA256: 2a45ce6b399d0ae544401fd9317f29ccc02768c9b84df5fa519b3554dbec9589
DMG SHA256: 8931394c8ecf769010fe7b4ae4ac1e4185561d5b23a93f33eec63973ffa29d01
ZIP ED25519: s6nM37P1OmXe61752g+TN+KWY5TvMHoajBHbD1Fiiz5p1uWu2rTPCVcNBsveF9EHpEPX1AOOxkinVhWBUyiOBg==
DMG ED25519: zvNfwyOedE6ka+5OxeQ83Q39mUC0V0PeGLLTHKUweK5TRXgJqBEOJ3ogMyZBaFfmfYOFRP9t640uV/KEHIAGCg==
```
