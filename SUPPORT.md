# CloudBoost Support

## Get Help

[License recovery and Mac transfer guide](https://getcloudboost.site/support.html). Stop the current session before releasing a Mac. Wait for server confirmation; keep the original purchase email and key. PRO 5 keys cover 5.x updates, while 4.x purchases remain valid for 4.x.

- [Private purchase and license support](https://payhip.com/CloudBoost/contact) through the existing store contact form. Include the checkout email and order number when asking for a purchase lookup; do not send full license keys, passwords or card details. Requests are reviewed and do not automatically transfer licenses.
- [Recover a Payhip receipt](https://help.payhip.com/article/379-did-not-receive-files-or-orders) if the purchase email or download link is missing. Receipt recovery does not transfer a device activation or upgrade a 4.x license. Current-Mac release is available in CloudBoost 5.1 or later; earlier versions and lost-device cases need private support.
- [Discord](https://discord.gg/KdxtPQRSB) for setup, diagnostics and license support. The [website support shortcut](https://getcloudboost.site/discord/) points to the current invitation.
- [GitHub Issues](https://github.com/victorbrandaao/CloudBoost/issues) for reproducible bugs and public feature requests.
- [Trust Center](https://getcloudboost.site/trust.html) for permissions, privacy and product limits.

## Include These Details

- CloudBoost version and macOS version;
- Mac model and Intel or Apple Silicon;
- selected game or service profile;
- Wi-Fi or Ethernet and VPN/firewall status;
- a screenshot of Session Doctor or Session Lab;
- a Session Proof report when available.

Never post a license key, payment receipt, email address or other personal information in a public issue. Use the private Payhip contact form or a private Discord support conversation for purchase-specific questions.

## Update Verification Recovery

CloudBoost verifies both the SHA256 checksum and a detached publisher signature before installing an update.

If version 4.4.1 or earlier reports that it cannot verify the publisher:

1. Download the latest DMG from the [official release page](https://github.com/victorbrandaao/CloudBoost/releases/latest).
2. Quit CloudBoost.
3. Open the DMG and drag CloudBoost to Applications, replacing the existing copy.
4. Open CloudBoost and confirm the new version under `Info`.

This one-time manual update preserves local settings and PRO activation. Builds from 4.4.2 onward understand embedded publisher signatures plus the GitHub release, GitHub API and CloudBoost website fallback routes. Do not download CloudBoost from third-party mirrors.
