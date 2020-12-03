import React, { Component } from 'react'
import Movies from './Movies'
import Basket from './Basket'
import axios from 'axios'

class MovieDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            basket: { items: [], rating: 0 },
        }
    }

    componentDidMount() {
        axios.get('/api/movies').then(res => {
            this.setState({
                movies: res.data,
            })
        })
    }

    addToBasket = (id, rating) => {
        const body = { movie_id: id, rating }

        axios.post('/api/basket', body).then(res => {
            this.setState({ basket: res.data })
        })
    }

    changeRating = (id, action) => {
        axios.put(`/api/basket/${id}?action=${action}`).then(res => {
            this.setState({ basket: res.data })
        })
    }

    removeFromBasket = id => {
        axios.delete(`/api/basket/${id}`).then(res => {
            this.setState({ basket: res.data })
        })
    }

    clearBasket = () => {
        axios.delete('/api/basket').then(res => {
            this.setState({ basket: res.data })
        })
    }

    render() {
        return (
            <div>
                <Movies
                    movies={this.state.movies}
                    addToBasket={this.addToBasket}
                />

                <Basket
                    basket={this.state.basket}
                    changeRating={this.changeRating}
                    removeFromBasket={this.removeFromBasket}
                    clearBasket={this.clearBasket}
                />
            </div>
        )
    }
}

export default MovieDisplay
