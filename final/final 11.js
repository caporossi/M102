var unique = db.problem11.aggregate([
    {"$group":
        {
            _id: {
                "N2": "$N2",
                "mutant": "$mutant"
            }
        }
    }
]);

unique.result.length;