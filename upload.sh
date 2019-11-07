#!/usr/bin/env bash

pyftpsync \
  upload . \
  --verbose \
  --exclude "lib,images" \
  ftp://art-and-function.de/sites/art-and-function/
