#!/usr/bin/env bash

set -Eeuxo pipefail

DIR="$(dirname "$(readlink -f "$0")")"

pushd "${DIR}"

python3 -m venv "venv"

source "venv/bin/activate"

python3 -m pip install --upgrade pip
python3 -m pip install --upgrade setuptools
python3 -m pip install --upgrade wheel

poetry install

popd
# you might need to install
# sudo apt install python3-venv
