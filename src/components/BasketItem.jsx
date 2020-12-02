import React from 'react'

const BasketItem = props => {
    return (
        <div>
            <p>Title: {props.item.name}</p>
            <img src={props.item.image} alt='' />
            <p>Release Year: {props.item.year}</p>
            <p>Starring: {props.item.actor}</p>
            {/* <p className='description'>{props.item.description}</p> */}
            <p>User Rating: {props.item.rating}</p>
        </div>
    )
}

export default BasketItem
