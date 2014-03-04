db.products.ensureIndex({"for":1});

//Q1
db.products.find({"for":"ac3"}).count();

//Q2 & Q3
db.products.find({"for":"ac3"}).explain(); //4 scanned object. used index
