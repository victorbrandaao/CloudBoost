# CloudBoost Support

## Get Help

- [Discord](https://getcloudboost.site/discord/) for setup, diagnostics and license support.
- [GitHub Issues](https://github.com/victorbrandaao/CloudBoost/issues) for reproducible bugs and public feature requests.
- [Trust Center](https://getcloudboost.site/trust.html) for permissions, privacy and product limits.

## Include These Details

- CloudBoost version and macOS version;
- Mac model and Intel or Apple Silicon;
- selected game or service profile;
- Wi-Fi or Ethernet and VPN/firewall status;
- a screenshot of Session Doctor or Session Lab;
- a Session Proof report when available.

Never post a license key, payment receipt, email address or other personal information in a public issue. Send license-specific information privately through Discord support.

## Update Verification Recovery

CloudBoost verifies both the SHA256 checksum and a detached publisher signature before installing an update.

If version 4.4.1 or earlier reports that it cannot verify the publisher:

1. Download the latest DMG from the [official release page](https://github.com/victorbrandaao/CloudBoost/releases/latest).
2. Quit CloudBoost.
3. Open the DMG and drag CloudBoost to Applications, replacing the existing copy.
4. Open CloudBoost and confirm the new version under `Info`.

This one-time manual update preserves local settings and PRO activation. Builds from 4.4.2 onward understand embedded publisher signatures plus the GitHub release, GitHub API and CloudBoost website fallback routes. Do not download CloudBoost from third-party mirrors.
