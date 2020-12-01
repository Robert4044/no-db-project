import React from 'react'

const Movies = ({ movies }) => {
    console.log(movies)
    const movieMap = movies.map(movie => {
        return <Movie key={movie.id} movie={movie} />
    })
    return <div>{movieMap}</div>
}

export default Movies
