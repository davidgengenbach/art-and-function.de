#!/usr/bin/env bash

USER="$1"
PASSWORD="$2"

EXCLUDES="lib,images,images/pages,.git,node_modules,.idea"

if [ ! -z "$USER" ]
then
  USER_PASSWORD="${USER}:${PASSWORD}@"
fi

URL="ftp://${USER_PASSWORD}art-and-function.de/sites/art-and-function/"

pyftpsync \
  upload . \
  "$URL" \
  --exclude "$EXCLUDES" \
  --resolve local \
  --progress
