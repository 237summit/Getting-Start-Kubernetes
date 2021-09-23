#!/bin/bash
mkdir -p /webdata
while true
do
  /usr/bin/rig | /usr/bin/boxes -d $OPTION  > /webdata/index.html
  sleep $INTERVAL
done
