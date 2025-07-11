#!/bin/bash

LIB="@petr-ptacek/vue-resize-container"
APP="playground-vue"

trap "kill %1" SIGINT

pnpm --filter $LIB dev &
pnpm --filter $APP dev

wait
