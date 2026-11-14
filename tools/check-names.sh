#!/usr/bin/env bash
# check-names.sh — name rule guard for the built static site (PRD acceptance criterion 1).
#   tools/check-names.sh [out-dir]      (default: out)
# Fails (exit 1) when:
#   - "W Principles", "Morehead" or "$22M" appear anywhere except the /resume route files
#     (out/resume.html, out/resume.txt, out/resume/**) and the resume PDF;
#   - any always-banned term appears anywhere (resume included);
#   - any file or directory path outside /resume contains "morehead".
# Text files only for content (-I skips binaries); paths are checked separately.
set -uo pipefail
OUT="${1:-out}"
[[ -d "$OUT" ]] || { echo "check-names: no such dir: $OUT (run npm run build first)" >&2; exit 2; }

RESUME_ONLY='W Principles|Morehead|\$22M'
ALWAYS_CI='MOSC|Hopkinsville|Cost Cockpit|AI renderings|Walker Company|Walker Co\.|Jon Cheatham|Andrew Eberle|Stave|vercel\.app'
ALWAYS_CS='\bCUI\b|\bEtsy\b'   # case-sensitive: minified JS has random "etSy"-like runs

is_resume() {  # path relative to OUT
  case "$1" in
    resume.html|resume.txt|resume/*|Miles_Goodman_Resume.pdf) return 0 ;;
    _redirects) return 0 ;;   # carries the old one-senior-care-morehead slug on purpose (301 source)
    *) return 1 ;;
  esac
}

fail=0
count_ro=0; count_al=0; count_path=0

while IFS= read -r -d '' f; do
  rel="${f#"$OUT"/}"
  if ! is_resume "$rel"; then
    if hits=$(grep -I -o -i -E "$RESUME_ONLY" "$f" 2>/dev/null | sort | uniq -c); [[ -n "$hits" ]]; then
      echo "RESUME-ONLY term outside /resume: $rel"; sed 's/^/    /' <<<"$hits"; fail=1; count_ro=$((count_ro+1))
    fi
  fi
  hits=$( { grep -I -o -i -E "$ALWAYS_CI" "$f" 2>/dev/null; grep -I -o -E "$ALWAYS_CS" "$f" 2>/dev/null; } | sort | uniq -c)
  if [[ -n "$hits" ]]; then
    echo "BANNED term: $rel"; sed 's/^/    /' <<<"$hits"; fail=1; count_al=$((count_al+1))
  fi
done < <(find "$OUT" -type f -print0)

while IFS= read -r p; do
  rel="${p#"$OUT"/}"
  is_resume "$rel" && continue
  echo "BANNED path: $rel"; fail=1; count_path=$((count_path+1))
done < <(find "$OUT" -ipath '*morehead*')

files=$(find "$OUT" -type f | wc -l)
if [[ $fail -eq 0 ]]; then
  echo "check-names: PASS ($files files scanned in $OUT; resume-only terms confined to /resume; 0 banned terms; 0 banned paths)"
else
  echo "check-names: FAIL (files with resume-only terms outside /resume: $count_ro; files with banned terms: $count_al; banned paths: $count_path)"
fi
exit $fail
