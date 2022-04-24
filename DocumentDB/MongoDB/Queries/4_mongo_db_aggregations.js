// function that accepts a movie document (and thus can access attributes by using this)
// this function maps documents to a key that equals the release year (key - release year, value - 1 single genre in this year)
let mapFunction = function() {
    let genres = this.genres;
    let year = this.release_year;

    // split the array into single pairs of year/genre
    // emit is a built-in function to return values from the map step
    for (let i=0; i < genres.length; i++) {
        emit({'year': year, 'genre': genres[i]}, 1);
    }
}

// counts all genres in the year, specified by the key; counts the values with same key
let reduceFunction = function(key, values) {
    return Array.sum(values);
}

// output on console (inline)
db.movies.mapReduce(mapFunction, reduceFunction, {out: {inline: 1}, query: {}})

// output to a new collection
db.movies.mapReduce(mapFunction, reduceFunction, {out: 'genre_yearly_hist', query: {}})
