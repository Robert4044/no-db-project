import React from 'react'
import Movie from './Movie'

const Movies = props => {
    const movieMap = props.movies.map(movie => {
        return (
            <Movie
                key={movie.id}
                movie={movie}
                addToBasket={props.addToBasket}
            />
        )
    })
    return <div className='movies-container'>{movieMap}</div> //TODO: Look here
}

export default Movies
