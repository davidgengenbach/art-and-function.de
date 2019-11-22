#!/usr/bin/env bash

pyftpsync \
  upload . \
  ftp://art-and-function.de/sites/art-and-function/ \
  --exclude "lib,images,images/pages,.git,node_modules,.idea" \
  --resolve local \
  --progress \
  --quiet
