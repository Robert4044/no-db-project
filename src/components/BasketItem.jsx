import React from 'react'

const BasketItem = props => {
    return (
        <div className='indiv-movies'>
            <p>Title: {props.item.name}</p>
            <img src={props.item.image} alt='' />
            <p>Release Year: {props.item.year}</p>
            <p className='starring'>Starring: {props.item.actor}</p>
            <p>User Rating: {props.item.rating}</p>
            <div>
                <button
                    onClick={() =>
                        props.changeRating(props.item.basket_id, 'decrease')
                    }>
                    -
                </button>
                <button
                    onClick={() =>
                        props.removeFromBasket(props.item.basket_id)
                    }>
                    Remove
                </button>
                <button
                    onClick={() =>
                        props.changeRating(props.item.basket_id, 'increase')
                    }>
                    +
                </button>
            </div>
        </div>
    )
}

export default BasketItem
