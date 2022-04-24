// analytischer query
db.movies.aggregate([
    // stage 0 - only select these fields from movies
    {$project: {'release_year': 1, 'genres': 1, '_id': 0}},
    // stage 1 - unwrap the genres array
    {$unwind: '$genres'},
    // stage 2 - group by year and genre
    {$group: {
        _id : {'year': '$release_year', 'genre': '$genres'},
            value: {$sum: 1}
        }},
    {$match: {'_id.year' : 2000}}
])


// for joins, the one side could be a starting point
db.users.aggregate([
    // stage 0: select user with id 5
    {$match: {'_id' : '5'}}
])

// for joins, the lookup operator is required
db.users.aggregate([
    // stage 0: select user with id 5
    {$match: {'_id' : '5'}},
    // stage 1: lookup user from other collection
    {$lookup: {
        'from': 'ratings',
        'localField': '_id',
        'foreignField': 'user_id',
        'as': 'ratings'
    }},
])

