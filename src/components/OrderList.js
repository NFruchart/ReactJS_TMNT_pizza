import React, { Fragment } from 'react'
import pizzas from '../pizzas'

// snippet component stateless : rafc
const OrderList = ({ order, paidButton = false, setPaid = false }) => {
    const orderPizzasDisplay = Object.keys(order.pizzas).map(key => {
        const totalPizzaPrice = Math.round(pizzas[key].price * order.pizzas[key]*10 )/10;
        return (
            <div key={key} className="order-details-item">
                <div className="pizza-details">
                    <span>{pizzas[key].name}</span>
                    <span>{totalPizzaPrice.toFixed(2)} €</span>
                </div>
                <div className="price-details">
                    ({order.pizzas[key]} x {pizzas[key].price} €)
                </div>
            </div>
        )
    })
    return (        
        <Fragment>
            <div className="order-details-list">
                {orderPizzasDisplay}
            </div>
            <div className="order-summary">
                <div className="order-total">
                    Soit un total de : <strong>{order.total.toFixed(2)} €</strong>
                </div>
                {paidButton &&
                <button className="order-paid-button" onClick={setPaid}>Encaisser la commande</button>
                }
            </div>
        </Fragment>

    )
}

export default OrderList



