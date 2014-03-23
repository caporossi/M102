//shell:
//mongod --dbpath 1 --port 27001 --smallfiles --oplogSize 50 --replSet myRepl
//mongo --port 27001 --shell week4.js

var cfg = {
    _id: "myRepl",
    members: [{
        _id: 0,
        host: "127.0.0.1:27001"
    }]
};
rs.initiate(cfg);