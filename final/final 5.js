var doc = {
    _id : 1,
    author : 'joe',
    title : 'Too big to fail',
    text : 'text here',
    tags : [ 'business', 'finance' ],
    when : ISODate("2008-11-03"),
    views : 23002,
    votes : 4,
    voters : ['joe', 'jane', 'bob', 'somesh'],
    comments : [
        {
            commenter: 'allan',
            comment: "Well, i don't think so…",
            flagged: false,
            plus: 2
        }]
};

db.postings.insert(doc);


// answer 1
db.postings.find({"comments.flagged":false}).explain();
db.postings.find( { "comments.flagged" : true } );
db.postings.find({"comments.flagged":false}).explain();

// answer 2
// http://docs.mongodb.org/manual/core/indexes/
db.postings.ensureIndex({ voters: 1}, {unique: true});
db.postings.update(
    { _id: 1},
    {
        $inc : {votes:1},
        $push : {voters:'joe'}
    }
);

// answer 3
db.postings.update(
    { _id:1 ,
        voters: {$ne:'joe'}
    },
    {
        $inc : {votes:1},
        $push : {voters:'joe'}
    }
);