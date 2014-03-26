//console window #1 (let it run for at least 10 secs)
homework.b();

//console window #2
var ops = db.currentOp().inprog;

for(i = 0; i < ops.length; i++){
    if(ops[i]["secs_running"]>10){
        var opid = ops[i].opid;
        db.killOp(opid);
        print("Stopping op #"+opid)
    }
}

homework.c(); //homework answer