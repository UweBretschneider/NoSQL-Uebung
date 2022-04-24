//insert a movie
db.movies.insertOne( {
    "title": "Avatar 2",
    "release_year": 2022,
    "genres": ["Fantasy", "Sci-Fi"]
});

// update
// first document describes the document to-be-updated and the second contains the actual updates
// with $set only the specified arguments are updated otherwise the whole document will be replaced
db.movies.update({"title": "Avatar 2"}, {$set: {"release_year": 2023}})

// delete
db.movies.delete({"title": "Avatar 2"})