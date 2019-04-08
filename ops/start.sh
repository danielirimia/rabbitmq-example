#!/usr/bin/env bash
docker-compose -p example -f ./install/services.yml up -d --no-build
