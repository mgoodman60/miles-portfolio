"""
Delete Morehead progress photos not referenced in the page.
Keeps only the 66 photos used in the curated array.
"""
import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from pathlib import Path

MOREHEAD = Path("C:/Users/msgoo/Miles Construction Project Folder/portfolio-site/public/projects/morehead")

# Exact numbers from the progressPhotos array in page.tsx
KEPT_NUMS = [
    1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,
    60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115,
    120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175,
    180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235,
    240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295,
    300, 305, 310, 315, 320, 326,
]

# Build set of filenames to keep (using padStart(2, "0") logic)
kept_names = {f"progress-{str(n).zfill(2)}.jpg" for n in KEPT_NUMS}

deleted = 0
kept = 0
freed = 0

for f in sorted(MOREHEAD.glob("progress-*.jpg")):
    if f.name in kept_names:
        kept += 1
    else:
        freed += f.stat().st_size
        f.unlink()
        deleted += 1
        print(f"  DEL {f.name}")

print(f"\nKept: {kept}, Deleted: {deleted}, Freed: {freed/1024/1024:.1f}MB")
