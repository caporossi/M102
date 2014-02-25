//False - Has braces
db.products.find({},{name:1,_id:0}).sort({name:1});

//True
var c = db.products.find({},{name:1,_id:0}).sort({name:1}); while( c.hasNext() ) print( c.next().name);

//True
var c = db.products.find({}).sort({name:1}); c.forEach( function(doc){ print(doc.name) } );

//False - incorrect sorting (sorting descending instead of ascending)
var c = db.products.find({}).sort({name:-1}); while( c.hasNext() ) print( c.next().name);