import React from 'react'

// snippet component stateless : rafc
const Pizza = ( { name, price, image, addToOrder }) => {

    // Reformatage du prix
    price=price.toLocaleString(navigator.language, { minimumFractionDigits: 2} )

    return (
        <div className="pizza-wrapper" onClick={addToOrder}>
            <div className="pizza">
                <img className="pizza-image" alt="" src={require(`../img/pizzas/${image}`)}/>
                <div className="pizza-text">
                    <h3>{name}</h3>
                    <div className="pizza-price">{price} €</div>
                </div>                
            </div>
        </div>
    )
}

export default Pizza


