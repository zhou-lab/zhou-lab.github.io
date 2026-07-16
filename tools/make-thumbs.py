#!/usr/bin/env python3
"""Generate grid thumbnails for images/lab and images/papers.

The photo grids render small boxes and must not load the full-size files; see
CLAUDE.md. thumbOf() in js/components.js expects <dir>/thumbs/<name>.jpg for
every image in <dir>, so run this after adding a photo.

Sizes and crops mirror the CSS, so framing matches the grid exactly.
Idempotent: existing thumbs are rewritten unless --check is passed.

    python3 tools/make-thumbs.py           # regenerate all
    python3 tools/make-thumbs.py --check   # report missing/stale, write nothing
"""

import glob
import os
import sys

from PIL import Image, ImageOps

# (source dir, thumb size, centering) — centering matches CSS object-position:
# (0.5, 0.5) = center for object-fit: cover; (0.5, 0.0) = top.
SPECS = [
    ("images/lab", (296, 296), (0.5, 0.5)),
    ("images/papers", (300, 388), (0.5, 0.0)),
]
QUALITY = 80

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(root)

check = "--check" in sys.argv
missing = []
wrote = 0

for src_dir, size, centering in SPECS:
    thumb_dir = os.path.join(src_dir, "thumbs")
    os.makedirs(thumb_dir, exist_ok=True)

    sources = sorted(glob.glob(os.path.join(src_dir, "*.jpg")))
    for src in sources:
        dst = os.path.join(thumb_dir, os.path.basename(src))

        if check:
            if not os.path.exists(dst):
                missing.append(dst)
            elif os.path.getmtime(dst) < os.path.getmtime(src):
                missing.append(dst + " (stale)")
            continue

        im = Image.open(src).convert("RGB")
        ImageOps.fit(im, size, method=Image.LANCZOS, centering=centering).save(
            dst, "JPEG", quality=QUALITY, optimize=True, progressive=True
        )
        wrote += 1
        print(f"  {dst}  {os.path.getsize(dst) // 1024}K  {size[0]}x{size[1]}")

    # A thumb with no source is a leftover and will never be requested.
    for orphan in sorted(glob.glob(os.path.join(thumb_dir, "*.jpg"))):
        if not os.path.exists(os.path.join(src_dir, os.path.basename(orphan))):
            print(f"  orphan (no source): {orphan}", file=sys.stderr)

if check:
    if missing:
        print("missing or stale thumbnails:", file=sys.stderr)
        for m in missing:
            print(f"  {m}", file=sys.stderr)
        sys.exit(1)
    print("all thumbnails present and current")
else:
    print(f"wrote {wrote} thumbnails")
