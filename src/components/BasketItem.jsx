import React from 'react'
import Rating from './Rating'

const BasketItem = props => {
    return (
        <div className='indiv-movies'>
            <p>Title: {props.item.name}</p>
            <img src={props.item.image} alt='' />
            <p>Release Year: {props.item.year}</p>
            <p className='starring'>{props.item.actor}</p>
            <p>User Rating: {props.item.rating}</p>
            <div>
                <button
                    onClick={() =>
                        props.changeRating(props.item.id, 'decrease')
                    }>
                    -
                </button>
                <button
                    className='btn btn-basket'
                    onClick={() => props.removeFromBasket(props.item.id)}>
                    Remove
                </button>
                <button
                    onClick={() =>
                        props.changeRating(props.item.id, 'increase')
                    }>
                    +
                </button>
                <Rating />
            </div>
        </div>
    )
}

export default BasketItem
