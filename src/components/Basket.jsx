import React from 'react'
import BasketItem from './BasketItem'

function Basket(props) {
    const basketMap = props.basket.items.map(element => {
        return (
            <BasketItem
                key={element.id}
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
                    className='btn btn-color'
                    onClick={() => props.clearBasket()}>
                    Clear Basket
                </button>
            </div>
        </div>
    )
}

export default Basket
