cask "cloudboost" do
  version "4.4.0"
  sha256 "1a8479f315b6d4d876c8b17f049f2dc096e3ce3bb8d965ff787e35ab9d2cb72b"

  url "https://github.com/victorbrandaao/CloudBoost/releases/download/v#{version}/CloudBoost_v#{version}.dmg",
      verified: "github.com/victorbrandaao/CloudBoost/"
  name "CloudBoost"
  desc "Menu bar app for cloud gaming and play-session diagnostics"
  homepage "https://getcloudboost.site/"

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
