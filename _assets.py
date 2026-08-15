"""Prepare site image assets: trim the logo, build the favicon set, and crop
headshots to square portraits at two sizes.
"""
from PIL import Image, ImageChops, ImageDraw

SRC = "/Volumes/Crucial 4TB/NutritionSchools.org"
PUB = f"{SRC}/public"

# --- logo: trim the surrounding white, then export web + social versions -----
source = Image.open(f"{SRC}/nutritionschol log.png")
# Flatten onto white first: the source may carry an alpha channel, and the ink
# is dark, so compositing onto white is what preserves the artwork.
flat = Image.new("RGB", source.size, (255, 255, 255))
flat.paste(source, (0, 0), source if source.mode in ("RGBA", "LA") else None)

# The field is faintly off-white rather than pure white, so the bounding box is
# measured against the sampled corner colour with a generous tolerance.
corner = flat.getpixel((2, 2))
diff = ImageChops.difference(flat, Image.new("RGB", flat.size, corner))
box = diff.convert("L").point(lambda p: 255 if p > 28 else 0).getbbox()
pad = 10
box = (max(0, box[0] - pad), max(0, box[1] - pad),
       min(flat.width, box[2] + pad), min(flat.height, box[3] + pad))
trimmed = flat.crop(box)
print("logo trimmed to", trimmed.size)

wordmark = trimmed.copy()
wordmark.thumbnail((1400, 1400), Image.LANCZOS)
wordmark.save(f"{PUB}/images/nutritionschools-logo.png", optimize=True)
print("wordmark", wordmark.size)

# Square social/OG mark: logo centred on a cream field.
mark = Image.new("RGB", (1200, 630), (247, 250, 245))
fit = trimmed.copy()
fit.thumbnail((1000, 460), Image.LANCZOS)
mark.paste(fit, ((1200 - fit.width) // 2, (630 - fit.height) // 2))
mark.save(f"{PUB}/images/nutritionschools-mark.png", optimize=True)

# --- favicons: the apple/leaf glyph from the left of the logo ----------------
glyph = trimmed.crop((0, 0, int(trimmed.height * 1.05), trimmed.height))
side = max(glyph.size)
square = Image.new("RGB", (side, side), (255, 255, 255))
square.paste(glyph, ((side - glyph.width) // 2, (side - glyph.height) // 2))
square.resize((32, 32), Image.LANCZOS).save(f"{PUB}/favicon-32.png", optimize=True)
touch = Image.new("RGB", (180, 180), (13, 61, 44))
g = glyph.copy()
g.thumbnail((150, 150), Image.LANCZOS)
touch.paste(g, ((180 - g.width) // 2, (180 - g.height) // 2))
touch.save(f"{PUB}/apple-touch-icon.png", optimize=True)

# --- headshots ---------------------------------------------------------------
# Crop centres are set per image so the face sits in the upper third of the
# square, which is the convention the bio and byline components expect.
people = [
    (f"{SRC}/Donald Lewis.png", "donald-lewis", 0.57, 0.38, 0.95),
    (f"{SRC}/rachel.png", "rachel-weng", 0.37, 0.50, 0.97),
    (f"{SRC}/matthew-obrien-source.png", "matthew-obrien", 0.50, 0.50, 1.0),
]
for filename, slug, cx, cy, scale in people:
    im = Image.open(filename).convert("L").convert("RGB")
    size = int(min(im.width, im.height) * scale)
    left = int(im.width * cx - size / 2)
    top = int(im.height * cy - size / 2)
    left = max(0, min(left, im.width - size))
    top = max(0, min(top, im.height - size))
    face = im.crop((left, top, left + size, top + size))
    face.resize((512, 512), Image.LANCZOS).save(f"{PUB}/images/team/{slug}.jpg", quality=88, optimize=True)
    face.resize((128, 128), Image.LANCZOS).save(f"{PUB}/images/team/{slug}-sm.jpg", quality=88, optimize=True)
    print("headshot", slug, "from", im.size, "crop", size)

# --- inline SVG favicon ------------------------------------------------------
svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="13" fill="#0d3d2c"/>
  <path d="M32 17c8 0 13 5.5 13 13.5S38 51 32 51 19 38.5 19 30.5 24 17 32 17z" fill="#5aa04a"/>
  <path d="M33 17c0-5 4-8 9-9-1 6-4 9-9 9z" fill="#8bc34a"/>
  <path d="M32 47V27" stroke="#f7faf5" stroke-width="3" stroke-linecap="round"/>
  <path d="M32 33c-4-1-7-4-8-8 5 0 8 3 8 8zm0 0c4-1 7-4 8-8-5 0-8 3-8 8z" fill="#f7faf5"/>
</svg>
"""
open(f"{PUB}/favicon.svg", "w").write(svg)
print("done")
