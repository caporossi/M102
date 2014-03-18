//look how many cities with invalid name
db.zips.aggregate(
    [
        { $project : { _id : { $substr : ["$city",0,1] } } } ,
        { $group : { _id : "$_id", n : {$sum:1} } }
    ]
)

//remove invalid city names
db.zips.remove( { city : /^[0-9]/ });

//answer
db.zips.count();