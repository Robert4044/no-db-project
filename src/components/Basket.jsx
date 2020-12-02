import React from 'react'
import BasketItem from './BasketItem'

function Basket(props) {
    const basketMap = props.basket.items.map(element => {
        return <BasketItem key={element.basket_id} item={element} />
    })
    return (
        <div>
            <h1 className='basket-title'>Basket</h1>
            <div>
                <div>
                    <h2>{basketMap}</h2>
                </div>
            </div>
        </div>
    )
}

export default Basket
