#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="/opt/letscrud"
COMPOSE=(sudo docker compose --project-name letscrud --env-file .env.production)

cd "$APP_DIR"

if [[ ! -f .env.production ]]; then
  echo "Missing $APP_DIR/.env.production" >&2
  exit 1
fi

git pull --ff-only
"${COMPOSE[@]}" build app
"${COMPOSE[@]}" up -d db
"${COMPOSE[@]}" up -d --no-deps app

for attempt in {1..30}; do
  if curl --fail --silent --show-error http://127.0.0.1:3010/health >/dev/null; then
    echo "LetsCRUD deployment healthy."
    exit 0
  fi
  sleep 2
done

echo "LetsCRUD health check failed; recent app logs:" >&2
"${COMPOSE[@]}" logs --tail=100 app >&2
exit 1
