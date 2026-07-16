# zhou-lab.github.io

Single-page dashboard. `index.html` + `css/style.css` + `js/`. Content lives in
the `js/*-data.js` files; `js/components.js` renders it as web components.
No build step — GitHub Pages serves `master` as-is (`.nojekyll`).

## Photo grids need a matching thumbnail

**Adding a photo to `images/lab/` or `images/papers/` is not enough — generate
its thumbnail too, or the grid tile 404s.**

`thumbOf()` in `js/components.js` derives the grid's image path by convention:

    images/lab/foo.jpg     ->  images/lab/thumbs/foo.jpg
    images/papers/foo.jpg  ->  images/papers/thumbs/foo.jpg

Nothing validates this. A missing thumb is a broken tile, while the lightbox
still works — so it fails quietly.

The grids render small boxes (gallery 148x148, paper shelf 150x194, lightbox
strip 52x52) and must not load the full-size files. Serving originals here cost
~5.0M per page load versus ~432K with thumbs. `loading="lazy"` does not help:
both rows are in-viewport at the top, and lazy defers bytes without reducing
them. The lightbox itself loads the full image on purpose.

Thumb specs mirror what the CSS does, so framing stays identical:

| Directory | Size | Crop | Matches |
| --- | --- | --- | --- |
| `images/lab/thumbs` | 296x296 | center | `object-fit: cover` @2x of 148px |
| `images/papers/thumbs` | 300x388 | top | `object-position: top` @2x of 150x194 |

Regenerate all thumbs (idempotent — safe to re-run):

```bash
python3 tools/make-thumbs.py
```

## Image sizing

Source images are sized for the largest place they render, not for the camera:

- `images/lab/` — max 2048px long edge, JPEG q60 (~0.23 bytes/px). The lightbox
  caps at `88vw x 74vh`, so beyond ~2048px is invisible weight.
- `images/members/` — 320px, JPEG. Renders in an 84px circle (96px for `lead`).
- `images/papers/` — ~900-940 x 1200. Front pages rendered from the PDFs; they
  must stay legible in the lightbox, so don't shrink these further.

## sesame/ is redirect stubs — do not delete

`sesame/` holds 29 small HTML stubs redirecting to
`https://zhou-lab.github.io/sesame-docs/` (the docs moved to `zhou-lab/sesame-docs`
in July 2026). Bioconductor's *published* sesame vignettes link to the old
`zhou-lab.github.io/sesame/*` URLs and cannot be edited retroactively, so these
stubs are the only thing keeping those links alive. They redirect via
`location.replace` preserving the fragment — most inbound links carry anchors
like `#prepfuns`, which a plain meta refresh would drop.
