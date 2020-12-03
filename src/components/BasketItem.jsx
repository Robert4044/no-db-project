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
                    className='btn-minus'
                    onClick={() =>
                        props.changeRating(props.item.id, 'decrease')
                    }>
                    <i class='fas fa-user-minus fa-lg'></i>
                </button>
                <button
                    className='btn btn-basket'
                    onClick={() => props.removeFromBasket(props.item.id)}>
                    Remove
                </button>
                <button
                    className='btn-minus'
                    onClick={() =>
                        props.changeRating(props.item.id, 'increase')
                    }>
                    <i class='fas fa-user-plus fa-lg'></i>
                </button>
                <Rating />
            </div>
        </div>
    )
}

export default BasketItem
