db.trades.ensureIndex( { ticker:1, time:1 });
sh.enableSharding('week6');
sh.shardCollection('week6.trades',{ ticker:1, time:1 });

use config
db.chunks.find({}, {min:1,max:1,shard:1,_id:0,ns:1})

homework.b()