#!/usr/bin/env bash
set -Eeuo pipefail

SOURCE="/opt/letscrud/deploy/nginx/letscrud.conf"
TARGET="/etc/nginx/sites-available/letscrud.conf"
ENABLED="/etc/nginx/sites-enabled/letscrud.conf"
BACKUP_DIR="/etc/nginx/backups/letscrud-$(date -u +%Y%m%dT%H%M%SZ)"

if grep -R --line-number --extended-regexp 'server_name[^;]*(letscrud\.com|www\.letscrud\.com)' \
  /etc/nginx/sites-enabled /etc/nginx/conf.d 2>/dev/null | grep -v "$ENABLED"; then
  echo "Conflicting LetsCRUD server_name found; no changes made." >&2
  exit 1
fi

mkdir -p "$BACKUP_DIR"
cp -a /etc/nginx/nginx.conf "$BACKUP_DIR/"
[[ -d /etc/nginx/sites-available ]] && cp -a /etc/nginx/sites-available "$BACKUP_DIR/"
[[ -d /etc/nginx/sites-enabled ]] && cp -a /etc/nginx/sites-enabled "$BACKUP_DIR/"
[[ -d /etc/nginx/conf.d ]] && cp -a /etc/nginx/conf.d "$BACKUP_DIR/"

install -m 0644 "$SOURCE" "$TARGET"
ln -sfn "$TARGET" "$ENABLED"

if nginx -t; then
  systemctl reload nginx
  echo "LetsCRUD Nginx configuration installed and reloaded. Backup: $BACKUP_DIR"
else
  rm -f "$ENABLED" "$TARGET"
  echo "nginx -t failed. New LetsCRUD config removed; Nginx was not reloaded." >&2
  exit 1
fi
