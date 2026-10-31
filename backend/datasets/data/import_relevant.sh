#!/usr/bin/env bash
# Run the import_data command for every Iconclass code in relevant_iconclass.txt.
# Usage: ./import_relevant.sh [source]   (source: rijks (default) or rkd)
cd "$(dirname "$0")" || exit 1

SOURCE="${1:-rijks}"
LIST="relevant_iconclass.txt"

while IFS= read -r code || [ -n "$code" ]; do
    code="$(echo "$code" | tr -d '\r' | xargs)"
    [ -z "$code" ] && continue
    echo "=== Importing $code ($SOURCE) ==="
    yarn django import_data "$code" "$SOURCE" || echo "Failed for $code, continuing" >&2
done < "$LIST"
