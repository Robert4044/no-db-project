import React from 'react'
import BasketItem from './BasketItem'

function Basket(props) {
    console.log(props)
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
            <h1 className='basket-title'>Basket</h1>

            <h4 className={'basket-container'}>{basketMap}</h4>
            <div className='btn-placement'>
                <button
                    className='btn btn-basket'
                    onClick={() => props.clearBasket()}>
                    Clear Basket
                </button>
            </div>
        </div>
    )
}

export default Basket
