#!/usr/bin/env bash
# Usage: ./load-env.sh development
ENV="$1"
if [ -z "$ENV" ]; then
  echo "Usage: $0 <development|staging|production>"
  exit 1
fi
ENVFILE=".env.$ENV"
if [ ! -f "$ENVFILE" ]; then
  echo "$ENVFILE does not exist"
  exit 1
fi
# Load env variables into shell and run build
export $(cat $ENVFILE | sed 's/#.*//g' | xargs)
echo "Loaded $ENVFILE"
npm run build:$ENV
