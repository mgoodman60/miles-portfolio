"""
Rebuild public/projects/morehead/ from the source folder with correct
orientation (iPhone portraits land portrait, landscapes land landscape) and
emit a TS module the page imports for real width/height — so the gallery
lays out portraits and landscapes correctly instead of squashing portraits
into a 1200x900 box.

  Source:  Morehead One Senior Care/Drone Photos/         -> drone-NN.jpg
           Morehead One Senior Care/Daily Progress Photos/ -> progress-NN.jpg
  Output:  portfolio-site/public/projects/morehead/*.jpg
           portfolio-site/src/app/projects/one-senior-care-morehead/photos.ts

Usage:  python rebuild-morehead.py
"""
import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from pathlib import Path
from PIL import Image, ImageOps
import json

ROOT = Path(r"C:\Users\msgoo\Miles Construction Project Folder")
SRC_DRONE = ROOT / "Morehead One Senior Care" / "Drone Photos"
SRC_PROGRESS = ROOT / "Morehead One Senior Care" / "Daily Progress Photos"
OUT_DIR = ROOT / "portfolio-site" / "public" / "projects" / "morehead"
TS_OUT = ROOT / "portfolio-site" / "src" / "app" / "projects" / "one-senior-care-morehead" / "photos.ts"

DRONE_COUNT = 16
PROGRESS_COUNT = 40
MAX_DIM = 1920
QUALITY = 82
SRC_EXTS = {".jpg", ".jpeg", ".png"}  # HEIC requires pillow-heif; JPG pool is plenty


def list_sorted(folder: Path) -> list[Path]:
    """Sort source photos chronologically (iOS filenames are timestamps)."""
    files = [p for p in folder.iterdir() if p.is_file() and p.suffix.lower() in SRC_EXTS]
    return sorted(files, key=lambda p: p.name.lower())


def even_sample(files: list[Path], n: int) -> list[Path]:
    if len(files) <= n:
        return files
    step = (len(files) - 1) / (n - 1)
    return [files[round(i * step)] for i in range(n)]


def process(src: Path, dst: Path) -> tuple[int, int]:
    """Read src, bake EXIF rotation, resize, save dst. Return (w,h) of output."""
    with Image.open(src) as img:
        img = ImageOps.exif_transpose(img)
        if img.mode != "RGB":
            if img.mode in ("RGBA", "LA", "P"):
                bg = Image.new("RGB", img.size, (255, 255, 255))
                if img.mode == "P":
                    img = img.convert("RGBA")
                bg.paste(img, mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None)
                img = bg
            else:
                img = img.convert("RGB")
        w, h = img.size
        if max(w, h) > MAX_DIM:
            ratio = MAX_DIM / max(w, h)
            new_w, new_h = int(w * ratio), int(h * ratio)
            img = img.resize((new_w, new_h), Image.LANCZOS)
            w, h = new_w, new_h
        img.save(dst, "JPEG", quality=QUALITY, optimize=True)
    return w, h


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    # Wipe old drone-* and progress-* (we're regenerating with new counts)
    removed = 0
    for f in OUT_DIR.glob("drone-*.jpg"):
        f.unlink(); removed += 1
    for f in OUT_DIR.glob("progress-*.jpg"):
        f.unlink(); removed += 1
    print(f"Removed {removed} old files")

    import re
    def month_of(p: Path) -> str:
        m = re.match(r"(\d{4})(\d{2})", p.name)
        return f"{m.group(1)}-{m.group(2)}" if m else ""

    # Drone — first 16 chronologically
    drone_src = list_sorted(SRC_DRONE)[:DRONE_COUNT]
    drone_out = []
    for i, src in enumerate(drone_src, 1):
        name = f"drone-{i:02d}.jpg"
        w, h = process(src, OUT_DIR / name)
        drone_out.append({"src": f"/projects/morehead/{name}", "width": w, "height": h,
                          "alt": f"One Senior Care Morehead — drone view {i}",
                          "month": month_of(src)})
        print(f"  drone {i:02d}: {src.name} -> {w}x{h}")

    # Progress — 40 evenly spaced across full chronological set
    progress_pool = list_sorted(SRC_PROGRESS)
    progress_picks = even_sample(progress_pool, PROGRESS_COUNT)
    progress_out = []
    for i, src in enumerate(progress_picks, 1):
        name = f"progress-{i:02d}.jpg"
        w, h = process(src, OUT_DIR / name)
        progress_out.append({"src": f"/projects/morehead/{name}", "width": w, "height": h,
                             "alt": f"One Senior Care Morehead — construction progress {i}",
                             "month": month_of(src)})
        print(f"  progress {i:02d}: {src.name} -> {w}x{h} ({month_of(src)})")

    # Emit TS module: drone + per-month phase splits + flat progressPhotos
    TS_OUT.parent.mkdir(parents=True, exist_ok=True)

    def to_ts(arr):
        return "\n".join(
            f'  {{ src: "{p["src"]}", width: {p["width"]}, height: {p["height"]}, '
            f'alt: "{p["alt"]}" }},'
            for p in arr
        )

    feb = [p for p in progress_out if p["month"] == "2026-02"]
    mar = [p for p in progress_out if p["month"] == "2026-03"]
    apr = [p for p in progress_out if p["month"] == "2026-04"]

    # Drone hero rotation: pick 6 cinematic shots (every 3rd of the 16)
    drone_hero = drone_out[::3][:6] or drone_out[:6]

    ts = (
        "// Auto-generated by rebuild-morehead.py — do not edit by hand.\n"
        "export type Photo = { src: string; width: number; height: number; alt: string }\n\n"
        "export const dronePhotos: Photo[] = [\n"
        f"{to_ts(drone_out)}\n"
        "]\n\n"
        "export const droneHeroSlides: { src: string; alt: string }[] = [\n"
        + "\n".join(f'  {{ src: "{p["src"]}", alt: "{p["alt"]}" }},' for p in drone_hero) + "\n"
        "]\n\n"
        "export const progressPhotos: Photo[] = [\n"
        f"{to_ts(progress_out)}\n"
        "]\n\n"
        "export const progressFeb: Photo[] = [\n" + to_ts(feb) + "\n]\n\n"
        "export const progressMar: Photo[] = [\n" + to_ts(mar) + "\n]\n\n"
        "export const progressApr: Photo[] = [\n" + to_ts(apr) + "\n]\n"
    )
    TS_OUT.write_text(ts, encoding="utf-8")
    print(f"  feb={len(feb)}  mar={len(mar)}  apr={len(apr)}  hero={len(drone_hero)}")
    print(f"\nWrote {TS_OUT.relative_to(ROOT)}")
    print(f"  drone:    {len(drone_out)} photos")
    print(f"  progress: {len(progress_out)} photos")
    print(f"  portrait: {sum(1 for p in drone_out + progress_out if p['height'] > p['width'])}")
    print(f"  landscape:{sum(1 for p in drone_out + progress_out if p['width'] > p['height'])}")


if __name__ == "__main__":
    main()
