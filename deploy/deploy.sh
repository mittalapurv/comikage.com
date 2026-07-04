#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="/opt/comikage"
COMPOSE=(sudo docker compose --project-name comikage --env-file .env.production)

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
  if curl --fail --silent --show-error http://127.0.0.1:3010/api/health >/dev/null; then
    echo "Comikage deployment healthy."
    exit 0
  fi
  sleep 2
done

echo "Comikage health check failed; recent app logs:" >&2
"${COMPOSE[@]}" logs --tail=100 app >&2
exit 1
