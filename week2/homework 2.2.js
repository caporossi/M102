db.products.insert({
        "_id" : "ac9",
        "name" : "AC9 Phone",
        "brand" : "ACME",
        "type" : "phone",
        "price" : 333,
        "warranty_years" : 0.25,
        "available" : true
    }
);

db.products.update(
    { _id : ObjectId("507d95d5719dbef170f15c00") },
    {
        "$set": {
            "term_years": 3 ,
            "limits.sms.over_rate": 0.01
        }
    }
)