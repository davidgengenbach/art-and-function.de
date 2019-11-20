#!/usr/bin/env bash

pyftpsync \
  upload . \
  ftp://art-and-function.de/sites/art-and-function/ \
  --exclude "lib,images,.git" \
  --resolve local \
  --progress \
  --quiet
