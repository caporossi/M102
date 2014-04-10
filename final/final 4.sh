#!/bin/bash
mongo --port 27003 --eval "var cfg = rs.config(); cfg.members[2].priority = 0; rs.reconfig(cfg);"

sleep 15

mongo --port 27003 --eval "load('a.js'); part4();"
