var cfg = rs.config();
cfg.members.push({_id:1, host:"Stass-MacBook-Air.local:27002"})
cfg.members.push({_id:2, host:"Stass-MacBook-Air.local:27003"})
rs.reconfig(cfg);


//or:
rs.add('Stass-MacBook-Air.local:27002')
rs.add('Stass-MacBook-Air.local:27003')
