#!/usr/bin/env bash
# Run the import_rijks command for every Iconclass code in relevant_iconclass.txt.
# Usage: ./import_relevant.sh
cd "$(dirname "$0")" || exit 1

LIST="relevant_iconclass.txt"

while IFS= read -r code || [ -n "$code" ]; do
    code="$(echo "$code" | tr -d '\r' | xargs)"
    [ -z "$code" ] && continue
    echo "=== Importing $code ==="
    yarn django import_rijks "$code" || echo "Failed for $code, continuing" >&2
done < "$LIST"
