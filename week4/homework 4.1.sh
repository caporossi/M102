#!/bin/sh
mkdir 1
mkdir 2
mkdir 3

mongod --dbpath 1 --port 27001 --smallfiles --oplogSize 50 &

mongo --port 27001 --shell week4.js

#in console:
#  > homework.init()
#  > homework.a()