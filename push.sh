#!/bin/bash

./build.sh &&
    zip -r dist.zip dist/ &&
    scp dist.zip ppay:/home/user/ldf/node &&
    rm -rf dist.zip
