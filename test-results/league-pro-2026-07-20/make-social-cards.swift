import AppKit

let sourceURL = URL(fileURLWithPath: CommandLine.arguments[1])
let squareURL = URL(fileURLWithPath: CommandLine.arguments[2])
let portraitURL = URL(fileURLWithPath: CommandLine.arguments[3])

guard let source = NSImage(contentsOf: sourceURL) else {
    fatalError("Could not load session result")
}

let ink = NSColor(calibratedWhite: 0.055, alpha: 1)
let paper = NSColor(calibratedWhite: 0.96, alpha: 1)
let muted = NSColor(calibratedWhite: 0.68, alpha: 1)
let green = NSColor(calibratedRed: 0.08, green: 0.84, blue: 0.61, alpha: 1)

func drawText(_ text: String, frame: NSRect, size: CGFloat, weight: NSFont.Weight, color: NSColor) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.lineBreakMode = .byWordWrapping
    let attributes: [NSAttributedString.Key: Any] = [
        .font: NSFont.systemFont(ofSize: size, weight: weight),
        .foregroundColor: color,
        .paragraphStyle: paragraph
    ]
    NSAttributedString(string: text, attributes: attributes).draw(in: frame)
}

func render(width: Int, height: Int, output: URL, portrait: Bool) throws {
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
    ) else { fatalError("Could not create bitmap") }

    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)
    ink.setFill()
    NSRect(x: 0, y: 0, width: width, height: height).fill()

    if portrait {
        drawText("CloudBoost PRO × League of Legends", frame: NSRect(x: 64, y: 1240, width: 950, height: 46), size: 23, weight: .semibold, color: green)
        drawText("A real 42-minute Mac session.", frame: NSRect(x: 64, y: 1140, width: 950, height: 94), size: 49, weight: .bold, color: paper)
        drawText("Measured in the shipping interface, with an independent sample alongside it.", frame: NSRect(x: 64, y: 1080, width: 920, height: 60), size: 21, weight: .regular, color: muted)

        let imageFrame = NSRect(x: 325, y: 455, width: 430, height: 544)
        source.draw(in: imageFrame, from: .zero, operation: .sourceOver, fraction: 1)

        let metrics = ["92/100  score", "25 ms  route p95", "8 ms  max jitter", "0.0%  max loss"]
        for (index, metric) in metrics.enumerated() {
            let x = 64 + CGFloat(index % 2) * 500
            let y = 338 - CGFloat(index / 2) * 90
            drawText(metric, frame: NSRect(x: x, y: y, width: 450, height: 50), size: 27, weight: .bold, color: paper)
        }

        drawText("CloudBoost PRO · $10 one-time v4.x license", frame: NSRect(x: 64, y: 112, width: 950, height: 42), size: 22, weight: .semibold, color: green)
        drawText("Observational test. No FPS or guaranteed latency claim.", frame: NSRect(x: 64, y: 66, width: 950, height: 34), size: 16, weight: .medium, color: muted)
    } else {
        drawText("CloudBoost PRO × League of Legends", frame: NSRect(x: 62, y: 1100, width: 1080, height: 44), size: 22, weight: .semibold, color: green)
        drawText("One real session, measured.", frame: NSRect(x: 62, y: 1010, width: 1080, height: 84), size: 48, weight: .bold, color: paper)

        let imageFrame = NSRect(x: 58, y: 235, width: 500, height: 632)
        source.draw(in: imageFrame, from: .zero, operation: .sourceOver, fraction: 1)

        let metrics: [(String, String)] = [
            ("42m 38s", "session"),
            ("92/100", "score"),
            ("25 ms", "route p95"),
            ("8 ms", "max jitter"),
            ("0.0%", "max loss"),
            ("1.68%", "CloudBoost CPU avg")
        ]
        for (index, metric) in metrics.enumerated() {
            let x = 630 + CGFloat(index % 2) * 270
            let y = 770 - CGFloat(index / 2) * 170
            drawText(metric.0, frame: NSRect(x: x, y: y, width: 240, height: 50), size: 34, weight: .bold, color: paper)
            drawText(metric.1, frame: NSRect(x: x, y: y - 38, width: 240, height: 36), size: 16, weight: .medium, color: muted)
        }

        drawText("PRO · $10 one-time", frame: NSRect(x: 630, y: 250, width: 500, height: 48), size: 27, weight: .bold, color: green)
        drawText("Observational test. No FPS or guaranteed latency claim.", frame: NSRect(x: 62, y: 90, width: 1080, height: 36), size: 16, weight: .medium, color: muted)
    }

    NSGraphicsContext.restoreGraphicsState()
    guard let data = bitmap.representation(using: .png, properties: [:]) else { fatalError("Could not encode PNG") }
    try data.write(to: output)
}

try render(width: 1200, height: 1200, output: squareURL, portrait: false)
try render(width: 1080, height: 1350, output: portraitURL, portrait: true)
