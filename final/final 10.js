db.elegans.ensureIndex({N2:1,mutant:1})
db.elegans.find({N2:"T",mutant:"A"}).limit(5).explain()