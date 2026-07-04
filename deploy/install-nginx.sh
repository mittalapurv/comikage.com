#!/usr/bin/env bash
set -Eeuo pipefail

SOURCE="/opt/comikage/deploy/nginx/comikage.conf"
TARGET="/etc/nginx/sites-available/comikage.conf"
ENABLED="/etc/nginx/sites-enabled/comikage.conf"
BACKUP_DIR="/etc/nginx/backups/comikage-$(date -u +%Y%m%dT%H%M%SZ)"

if grep -R --line-number --extended-regexp 'server_name[^;]*(comikage\.com|www\.comikage\.com)' \
  /etc/nginx/sites-enabled /etc/nginx/conf.d 2>/dev/null | grep -v "$ENABLED"; then
  echo "Conflicting Comikage server_name found; no changes made." >&2
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
  echo "Nginx configuration installed and reloaded. Backup: $BACKUP_DIR"
else
  rm -f "$ENABLED" "$TARGET"
  echo "nginx -t failed. New Comikage config removed; Nginx was not reloaded." >&2
  exit 1
fi
