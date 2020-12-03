import React from 'react'
import Rating from './Rating'

const BasketItem = props => {
    return (
        <div className='indiv-movies'>
            <div className='title-image'>
                <div className='img-title'>
                    <p>{props.item.name}</p>
                </div>
                <img src={props.item.image} alt='' />
            </div>
            <div className='basket-info'>
                <p>Release Year: {props.item.year}</p>
                <p className='starring'>{props.item.actor}</p>
                <p>User Rating: {props.item.rating}</p>
            </div>

            <div className='btn-rating'>
                <button
                    className='btn-minus'
                    onClick={() =>
                        props.changeRating(props.item.id, 'decrease')
                    }>
                    <i className='fas fa-user-minus fa-lg'></i>
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
                    <i className='fas fa-user-plus fa-lg'></i>
                </button>
            </div>
            <Rating />
        </div>
    )
}

export default BasketItem
