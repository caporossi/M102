db.products.update(
    { "for": "ac3" },
    { "$inc": {"price": 2} },
    { multi: 1 }
)