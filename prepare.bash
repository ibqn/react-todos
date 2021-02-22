#!/usr/bin/env bash

set -Eeuxo pipefail

DIR="$(dirname "$(readlink -f "$0")")"

python3 -m venv "${DIR}/venv"

source "${DIR}/venv/bin/activate"

python3 -m pip install --upgrade pip
python3 -m pip install --upgrade setuptools
python3 -m pip install --upgrade wheel

poetry install

# you might need to install
# sudo apt install python3-venv
