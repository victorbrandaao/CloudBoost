from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "CloudBoost-Personal-Session-Review.pdf"


def wrapped_lines(text: str, font: str, size: float, width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c: canvas.Canvas, text: str, x: float, y: float, width: float,
                 font: str = "Helvetica", size: float = 10.5,
                 leading: float = 15, color: str = "#26313B") -> float:
    c.setFillColor(HexColor(color))
    c.setFont(font, size)
    for line in wrapped_lines(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    page_width, page_height = A4
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)
    c.setTitle("CloudBoost Personal Session Review")
    c.setAuthor("CloudBoost")

    margin = 52
    content_width = page_width - (margin * 2)
    green = "#00A67D"
    ink = "#15202B"
    muted = "#5E6A75"

    c.setFillColor(HexColor(ink))
    c.rect(0, page_height - 112, page_width, 112, fill=1, stroke=0)
    c.setFillColor(HexColor(green))
    c.roundRect(margin, page_height - 76, 28, 28, 7, fill=1, stroke=0)
    c.setFillColor(HexColor("#FFFFFF"))
    c.setFont("Helvetica-Bold", 18)
    c.drawString(margin + 42, page_height - 64, "CloudBoost")
    c.setFont("Helvetica", 10)
    c.setFillColor(HexColor("#B9C3CB"))
    c.drawString(margin + 42, page_height - 82, "Personal Session Review - next steps")

    y = page_height - 150
    c.setFillColor(HexColor(ink))
    c.setFont("Helvetica-Bold", 22)
    c.drawString(margin, y, "Your purchase includes")
    y -= 28
    y = draw_wrapped(
        c,
        "A one-time CloudBoost 4.x PRO license and one personal review of a complete Session Proof report.",
        margin,
        y,
        content_width,
        font="Helvetica",
        size=11.5,
        leading=17,
    )

    y -= 18
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(HexColor(green))
    c.drawString(margin, y, "1. Activate PRO")
    y -= 21
    y = draw_wrapped(c, "Payhip sends a unique license key in your receipt. Open CloudBoost, choose Get PRO, and paste the full key.", margin, y, content_width)

    y -= 13
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(HexColor(green))
    c.drawString(margin, y, "2. Record a useful session")
    y -= 21
    y = draw_wrapped(c, "Select the game or streaming profile, start CloudBoost, and play long enough to reproduce the problem. Ten minutes or more usually gives a clearer timeline.", margin, y, content_width)

    y -= 13
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(HexColor(green))
    c.drawString(margin, y, "3. Export Session Proof")
    y -= 21
    y = draw_wrapped(c, "Stop the session and export or copy Session Proof. Add your Mac model, macOS version, connection type, game or service, and a short description of what you felt.", margin, y, content_width)

    y -= 13
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(HexColor(green))
    c.drawString(margin, y, "4. Send it securely")
    y -= 21
    y = draw_wrapped(c, "Open the CloudBoost Discord and send the report through the support channel. Never send your license key, password, payment details, or unrelated personal files.", margin, y, content_width)

    y -= 18
    c.setFillColor(HexColor("#EEF2F4"))
    c.roundRect(margin, y - 90, content_width, 92, 8, fill=1, stroke=0)
    c.setFillColor(HexColor(ink))
    c.setFont("Helvetica-Bold", 12)
    c.drawString(margin + 18, y - 23, "What you receive")
    draw_wrapped(c, "Within three business days after receiving a complete report: setup-specific observations, likely causes, and recommended next tests. This is diagnostic guidance, not a guarantee that an ISP route, remote server, router, or game engine can be repaired.", margin + 18, y - 43, content_width - 36, size=9.5, leading=13, color=muted)

    c.setStrokeColor(HexColor("#D7DEE3"))
    c.line(margin, 54, page_width - margin, 54)
    c.setFont("Helvetica", 8.5)
    c.setFillColor(HexColor(muted))
    c.drawString(margin, 37, "Support: discord.gg/kU5trxtRb")
    c.drawRightString(page_width - margin, 37, "CloudBoost - macOS gaming session tools")

    c.showPage()
    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    main()
