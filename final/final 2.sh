#!/bin/sh
mongo --shell --port 27003 a.js --eval "load('a.js'); testRollback();"
sleep 2

pkill mongod
sleep 5

mongod --fork --logpath a.log --smallfiles --oplogSize 50 --port 27001 --dbpath data/z1 --replSet z
mongod --fork --logpath b.log --smallfiles --oplogSize 50 --port 27002 --dbpath data/z2 --replSet z
sleep 10

mongo --port 27001 --eval "db.foo.insert({_id:'last'}); db.getLastErrorObj(2);"
sleep 2

mongod --fork --logpath c.log --smallfiles --oplogSize 50 --port 27003 --dbpath data/z3 --replSet z
sleep 10

mongo --port 27001 --eval "db.foo.find().toArray()"


# Mongo preserves the order of writes in a collection in its consistency model.
# In this problem, 27003's oplog was effectively a "fork" and
# to preserve write ordering a rollback was necessary during 27003's recovery phase.