// select one document
db.movies.findOne()

// find with predicates
db.movies.find({"title": "Black Panther"}, {})

// find with predicates and format results (only for terminal)
db.movies.find({"title": "Black Panther"}, {}).pretty()

// find with predicates and projection. The projection is a template document that is automatically filled, id fields are always displayed unless 
// explicilty marked with 0.
db.movies.find({"title": "Black Panther"}, {"title": 1, "_id": 0})

// search 10 crime and action movies; find returns a cursor that allows a limit parameter
db.movies.find( {$and: [{"genres": "Crime"}, {"genres": "Action"}]}).limit(10)

// search 10 crime and action movies; set an offset of 10 to the cursor (for pagination)
db.movies.find( {$and: [{"genres": "Crime"}, {"genres": "Action"}]}).skip(10).limit(10)

// find movies with release year 2020
db.movies.find({"release_year": 2020})

// why does this query yields no results?
db.movies.find({"release_year": "2020"})

// find 10 female users in age catory 1
db.users.find({$and: [{"age_id": 1}, {"gender": "F"}] }).limit(10) 

// get the count of users that are male lawyers
db.users.count({$and: [{"occupation": "Lawyer"}, {"gender": "M"}]})