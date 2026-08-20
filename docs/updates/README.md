# CloudBoost update signatures

This directory is the static fallback used by CloudBoost when GitHub's release
asset routes cannot return a publisher signature. Release packages remain hosted
on GitHub Releases. Only Ed25519 signatures and checksum metadata are mirrored
here.

The `Publish update signature mirror` workflow updates this directory whenever a
new release is published.
