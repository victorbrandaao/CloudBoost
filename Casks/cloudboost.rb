cask "cloudboost" do
  version "4.3.4"
  sha256 "069afb6028d9c782515af71dffdbdecf6df3b871429c9d918669b4b356cafa89"

  url "https://github.com/victorbrandaao/CloudBoost/releases/download/v#{version}/CloudBoost_v#{version}.dmg",
      verified: "github.com/victorbrandaao/CloudBoost/"
  name "CloudBoost"
  desc "macOS menu bar app for cloud and Mac gaming session diagnostics"
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
