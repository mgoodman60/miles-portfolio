"""
Batch compress all images in public/ to web sizes.
Max dimension: 1920px, JPEG quality: 82, skip if already small.
"""
import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import os
from pathlib import Path
from PIL import Image

PUBLIC = Path("C:/Users/msgoo/Miles Construction Project Folder/portfolio-site/public")
MAX_DIM = 1920
QUALITY = 82
EXTS = {".jpg", ".jpeg", ".png", ".webp"}

total_before = 0
total_after = 0
count = 0
skipped = 0

for img_path in PUBLIC.rglob("*"):
    if img_path.suffix.lower() not in EXTS:
        continue

    size_before = img_path.stat().st_size
    total_before += size_before

    try:
        with Image.open(img_path) as img:
            w, h = img.size
            if max(w, h) <= MAX_DIM and size_before < 300_000:
                # Already small enough
                total_after += size_before
                skipped += 1
                continue

            # Resize if needed
            if max(w, h) > MAX_DIM:
                ratio = MAX_DIM / max(w, h)
                new_w = int(w * ratio)
                new_h = int(h * ratio)
                img = img.resize((new_w, new_h), Image.LANCZOS)

            # Convert RGBA/P to RGB for JPEG
            if img.mode in ("RGBA", "P", "LA"):
                bg = Image.new("RGB", img.size, (255, 255, 255))
                if img.mode == "P":
                    img = img.convert("RGBA")
                bg.paste(img, mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None)
                img = bg
            elif img.mode != "RGB":
                img = img.convert("RGB")

            # Save back (overwrite)
            save_path = img_path.with_suffix(".jpg")
            img.save(save_path, "JPEG", quality=QUALITY, optimize=True)

            # Remove original if extension changed
            if save_path != img_path:
                img_path.unlink()

            size_after = save_path.stat().st_size
            total_after += size_after
            count += 1

            saved_pct = (1 - size_after / size_before) * 100
            print(f"  {img_path.relative_to(PUBLIC)} {size_before//1024}KB -> {size_after//1024}KB ({saved_pct:.0f}% saved)")

    except Exception as e:
        print(f"  SKIP {img_path.name}: {e}")
        total_after += size_before
        skipped += 1

print(f"\nDone. Compressed: {count} files, Skipped: {skipped}")
print(f"Total: {total_before/1024/1024:.1f}MB → {total_after/1024/1024:.1f}MB ({(1-total_after/total_before)*100:.1f}% reduction)")
