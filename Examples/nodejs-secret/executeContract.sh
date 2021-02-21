#!/bin/bash
make SGX=1
SGX=1 ./pal_loader nodejs.manifest contract.js
