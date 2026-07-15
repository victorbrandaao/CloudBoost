cask "cloudboost" do
  version "4.2.3"
  sha256 "1b7ce598ed019783b45ccee93cd5a6a9b3432ee19a518cf57974a922d807b13d"

  url "https://github.com/victorbrandaao/CloudBoost/releases/download/v#{version}/CloudBoost_v#{version}.dmg",
      verified: "github.com/victorbrandaao/CloudBoost/"
  name "CloudBoost"
  desc "macOS menu bar app for cloud and Mac gaming session diagnostics"
  homepage "https://victorbrandaao.github.io/CloudBoost/"

  depends_on macos: :monterey

  app "CloudBoost.app"

  zap trash: [
    "~/Library/Application Support/CloudBoost",
    "~/Library/Caches/com.victorbrandaao.CloudBoost",
    "~/Library/HTTPStorages/com.victorbrandaao.CloudBoost",
    "~/Library/Preferences/com.victorbrandaao.CloudBoost.plist",
    "~/Library/Saved Application State/com.victorbrandaao.CloudBoost.savedState",
  ]
end
