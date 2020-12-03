import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

class Rating extends React.Component {
    constructor() {
        super()

        this.state = {
            basket: { items: [], rating: 0 },
        }
    }

    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue })
    }

    render() {
        const { rating } = this.state

        return (
            <div>
                <StarRatingComponent
                    className='rating'
                    name='rate1'
                    starCount={10}
                    value={rating}
                    starColor='#fb8122'
                    onStarClick={this.onStarClick}
                    renderStarIcon={(index, value) => {
                        return (
                            <span>
                                <i
                                    className={
                                        index <= value
                                            ? 'fas fa-star'
                                            : 'fas fa-star'
                                    }
                                />
                            </span>
                        )
                    }}
                />
            </div>
        )
    }
}
export default Rating
