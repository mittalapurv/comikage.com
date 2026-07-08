#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="/opt/letscrud"
BACKUP_DIR="$APP_DIR/backups/postgres"
TIMESTAMP="$(date -u +%Y%m%dT%H%M%SZ)"

cd "$APP_DIR"
set -a
source .env.production
set +a

mkdir -p "$BACKUP_DIR"
umask 077

sudo docker compose --project-name letscrud --env-file .env.production exec -T db \
  pg_dump --format=custom --no-owner --no-acl \
  --username="$POSTGRES_USER" "$POSTGRES_DB" \
  > "$BACKUP_DIR/letscrud-$TIMESTAMP.dump"

find "$BACKUP_DIR" -type f -name 'letscrud-*.dump' -mtime +30 -delete
echo "Backup created: $BACKUP_DIR/letscrud-$TIMESTAMP.dump"
