import React, { Component } from 'react'
import axios from 'axios'
import Movies from './Movies'

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

    render() {
        return (
            <div>
                <Movies movies={this.state.movies} />
            </div>
        )
    }
}

export default MovieDisplay
