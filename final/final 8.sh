#!/bin/bash

mkdir -p log/cfg data/cfg

mongod --configsvr --dbpath data/cfg --logpath log/cfg.log --fork
sleep 5

mongorestore gene_backup/config_server/ --port 27019

mongo localhost:27019/config --eval "db.chunks.find().sort({_id:1}).next().lastmodEpoch.getTimestamp().toUTCString().substr(20,6)"
