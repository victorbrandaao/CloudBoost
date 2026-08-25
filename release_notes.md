# CloudBoost 4.4.2

CloudBoost 4.4.2 fixes the two installation problems reported most often: updates that could not verify the publisher and repeated Keychain password prompts after an update.

[MIN_VERSION: 4.3.4]

## What changed

- The update signature is embedded in the GitHub release notes, so verification no longer depends on a separate mirror being available first.
- The updater keeps three authenticated fallback routes: the direct GitHub asset, the GitHub Releases API, and the CloudBoost website mirror.
- Releases are uploaded as complete drafts and only then marked latest, preventing clients from seeing an incomplete release.
- CloudBoost no longer reads several legacy Keychain entries automatically at launch.
- Existing PRO users get an explicit `Reconnect existing PRO` action. It reads the old license once and migrates it into CloudBoost's encrypted, machine-bound local vault.
- New activations use the local encrypted vault and do not trigger the former chain of Keychain dialogs.
- Existing Payhip, Gumroad, and legacy PRO+ licenses keep their access. Pricing and plan entitlements are unchanged.
- PRO funnel telemetry now retains platform and source context, and the daily-active analytics view has been restored.

## Important upgrade note

If an older CloudBoost build still shows `CloudBoost could not verify who published this update`, install 4.4.2 manually once from the official DMG. Drag CloudBoost to Applications and replace the existing copy. Starting with 4.4.2, future releases use the new signed metadata path.

An existing PRO customer may see one CloudBoost-owned reconnect prompt after updating. This is an explicit, one-time migration. CloudBoost no longer attempts multiple background Keychain reads.

## Compatibility

CloudBoost 4.4.2 supports Intel and Apple Silicon Macs running macOS 12 Monterey or later. The release workflow built and verified both architecture slices and passed all 53 automated tests.

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
ZIP SHA256: 95106f2a0a851cdc077e7a3bc83b8a3fe292a3284f0aa1d988a138c15ac8aa6a
DMG SHA256: f336ae5e31d699ed476d1bfd485b6a3c8c7c5a911ec50f548ebac2751289f150
ZIP ED25519: AKgm0YyxOmifD79d9oydZIis7FkFLPTIzZoDFnVuF71CrCDGP7M1EicTNOJqS1IIqgduV4N4Ln59U/6CmXBxCw==
DMG ED25519: IEdXiMrnqlN3vwKa9zGNkGv2MUjXfWJ5xieUyILclLmzgTezciuenUVPWgFWetIbs0neluTKnZUieivmezhPAw==
```
