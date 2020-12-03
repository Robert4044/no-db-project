import React, { Component } from 'react'

class Movie extends Component {
    constructor() {
        super()
        this.state = {
            rating: 0,
        }
    }

    handleAddToBasket() {
        this.props.addToBasket(this.props.movie.id, this.state.rating)
        this.setState({ rating: 0 })
    }

    render() {
        return (
            <div className='indiv-movies'>
                <section>
                    <img
                        src={this.props.movie.image}
                        alt=''
                        className='img'></img>
                    <p className='title'>
                        {this.props.movie.name.toUpperCase()}
                    </p>
                </section>

                <button
                    className='btn'
                    onClick={() => this.handleAddToBasket()}>
                    Add To Basket
                </button>
            </div>
        )
    }
}

export default Movie
