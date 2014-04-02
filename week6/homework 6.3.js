//shell:
// mongod --dbpath data/2 --logpath log/2.log --fork --port 27020


sh.addShard('Stass-Macbook-Air.local:27020');

homework.check1()

use config;
db.chunks.find( { ns:"week6.trades" }, {min:1,max:1,shard:1,_id:0} ).sort({min:1})

homework.c()