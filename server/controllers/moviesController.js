const movies = require('../data.json')

// ? movies
// {
//   id: number,
//     name: string,
//     image: string,
//         description: string

// }

module.exports = {
    getAllMovies: (req, res) => {
        res.status(200).send(movies)
    },
}
