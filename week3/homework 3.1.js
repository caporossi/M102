db.zips.aggregate([
    //group by state
    {"$group": {
        "_id": "$state",
        "totalZips": {"$sum": 1}
    }},

    //sort by total zip codes for state
    {"$sort":{"totalZips":-1}},

    //skip the top 3
    {"$skip": 3 },

    //get only the 4th state with the most zip codes
    {"$limit": 1 }
]);