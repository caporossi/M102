#!/bin/sh
./a.sh
mongo --port 27003 --eval "load('a.js'); ourinit();"

sleep 20

mongo --port 27003 --eval "load('a.js'); testRollback();"


mongod --fork --logpath a.log --smallfiles --oplogSize 50 --port 27001 --dbpath data/z1 --replSet z
mongod --fork --logpath b.log --smallfiles --oplogSize 50 --port 27002 --dbpath data/z2 --replSet z

#wait for seconderies to sync
sleep 10


mongo --port 27001 --eval  "rs.slaveOk(); db.foo.count();"