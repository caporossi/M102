#!/bin/bash

mkdir -p data/1 data/2


#restore data
mongorestore gene_backup/s1 --dbpath data/1 --oplogReplay
mongorestore gene_backup/s2 --dbpath data/2 --oplogReplay


#update shard config
mongo localhost:27019/config
# in mongo shell:
# db.shards.update({ _id: 's1'}, {'$set':{'host':'localhost:27501'}});
# db.shards.update({ _id: 's2'}, {'$set':{'host':'localhost:27601'}});


#restart config server
pkill mongod
mongod --configsvr --dbpath data/cfg --logpath log/cfg.log --fork
sleep 5


#start mongod processes
mongod --shardsvr --port 27501 --dbpath data/1 --logpath log/1.log --fork
mongod --shardsvr --port 27601 --dbpath data/2 --logpath log/2.log --fork


mongo --port 27019 --eval "sh.stopBalancer()"
mongos --upgrade --configdb localhost:27019 --logpath log/s.log --fork


#connect to mongos and run query
mongo localhost/snps
# in mongo shell run:
# db.elegans.aggregate([{$match:{N2:'T'}},{$group:{_id:'$N2',n:{$sum:1}}}]).result[0].n