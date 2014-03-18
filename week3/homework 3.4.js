//reduce method
function reduce_closest(key,values){

    var total = 0;

    for(var i=0; i<values.length;i++){
        total+= values[i];
    }
    return total;
}

//mapReduce command
db.zips.mapReduce(map_closest,reduce_closest,{
    query: {state: "PA"},
    out: {inline:1 }
})