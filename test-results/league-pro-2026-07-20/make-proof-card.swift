import AppKit

let width = 1600
let height = 900
let outputURL = URL(fileURLWithPath: CommandLine.arguments[1])
let screenshotURL = URL(fileURLWithPath: CommandLine.arguments[2])

guard let screenshot = NSImage(contentsOf: screenshotURL) else {
    fatalError("Could not load session screenshot")
}

guard let bitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: width,
    pixelsHigh: height,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: 0,
    bitsPerPixel: 0
) else {
    fatalError("Could not create bitmap")
}

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)

NSColor(calibratedWhite: 0.055, alpha: 1).setFill()
NSRect(x: 0, y: 0, width: width, height: height).fill()

let screenshotFrame = NSRect(x: 70, y: 45, width: 590, height: 810)
NSColor(calibratedWhite: 0.12, alpha: 1).setFill()
NSBezierPath(roundedRect: screenshotFrame.insetBy(dx: -2, dy: -2), xRadius: 18, yRadius: 18).fill()
screenshot.draw(in: screenshotFrame, from: .zero, operation: .sourceOver, fraction: 1)

func draw(_ text: String, frame: NSRect, size: CGFloat, weight: NSFont.Weight, color: NSColor) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.lineBreakMode = .byWordWrapping
    let attributes: [NSAttributedString.Key: Any] = [
        .font: NSFont.systemFont(ofSize: size, weight: weight),
        .foregroundColor: color,
        .paragraphStyle: paragraph
    ]
    NSAttributedString(string: text, attributes: attributes).draw(in: frame)
}

let white = NSColor(calibratedWhite: 0.96, alpha: 1)
let muted = NSColor(calibratedWhite: 0.68, alpha: 1)
let green = NSColor(calibratedRed: 0.08, green: 0.84, blue: 0.61, alpha: 1)

draw("CloudBoost PRO × League of Legends", frame: NSRect(x: 730, y: 790, width: 800, height: 55), size: 24, weight: .semibold, color: green)
draw("One real session, measured.", frame: NSRect(x: 730, y: 700, width: 800, height: 90), size: 48, weight: .bold, color: white)
draw("42 minutes of native League on macOS, with the app's Session Proof and an independent five-minute sample.", frame: NSRect(x: 730, y: 620, width: 750, height: 78), size: 23, weight: .regular, color: muted)

let metrics: [(String, String)] = [
    ("92/100", "final session score"),
    ("25 ms", "route p95"),
    ("8 ms", "maximum jitter"),
    ("0.0%", "maximum packet loss"),
    ("100%", "League process detection"),
    ("1.68%", "CloudBoost average CPU in independent sample")
]

for (index, metric) in metrics.enumerated() {
    let column = index % 2
    let row = index / 2
    let x = 730 + CGFloat(column) * 390
    let y = 500 - CGFloat(row) * 135
    draw(metric.0, frame: NSRect(x: x, y: y, width: 340, height: 48), size: 34, weight: .bold, color: white)
    draw(metric.1, frame: NSRect(x: x, y: y - 42, width: 340, height: 44), size: 17, weight: .medium, color: muted)
}

draw("Observational test. No FPS gain or latency reduction is being claimed from one session.", frame: NSRect(x: 730, y: 55, width: 760, height: 55), size: 17, weight: .medium, color: muted)

NSGraphicsContext.restoreGraphicsState()

guard let data = bitmap.representation(using: .png, properties: [:]) else {
    fatalError("Could not encode PNG")
}
try data.write(to: outputURL)
