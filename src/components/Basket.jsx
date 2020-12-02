import React from 'react'
import BasketItem from './BasketItem'

function Basket(props) {
    const basketMap = props.basket.items.map(element => {
        return (
            <BasketItem
                key={element.basket_id}
                item={element}
                changeRating={props.changeRating}
                removeFromBasket={props.removeFromBasket}
            />
        )
    })
    return (
        <div>
            <div className='movies-basket-container'>
                <h1 className='basket-title'>Basket</h1>

                <h2>{basketMap}</h2>
            </div>
            <button onClick={() => props.clearBasket()}>Clear Basket</button>
        </div>
    )
}

export default Basket
