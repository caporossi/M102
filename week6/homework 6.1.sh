#!/bin/sh

function cleanup {
    rm -r log
    rm -r data
    pkill mongod
    pkill mongos
}

#cleanup from previous session
cleanup

#create folders
mkdir log
mkdir data
mkdir data/1
mkdir data/2
mkdir data/cfg


#start first mongod
mongod --dbpath data/1 --logpath log/1.log --fork
sleep 2

#init homework collection
mongo localhost/week6 --eval "load('week6.js'); homework.init(); db.trades.stats();"

#kill server
pkill mongod
sleep 1


#start mongod, config server and mongos
mongod --shardsvr --dbpath data/1 --logpath log/1.log --fork
mongod --configsvr --dbpath data/cfg --logpath log/cfg.log --fork
mongos --configdb Stass-Macbook-Air.local:27019 --logpath log/s.log --fork
sleep 2

#connect the shard
mongo localhost/week6 --eval "load('week6.js'); sh.addShard('Stass-Macbook-Air.local:27018'); print('Homework answer = '+homework.a());"
