import React, { Component } from 'react';
import Header from './Header';
import Pizza from './Pizza';
import OrderList from './OrderList';
import { connect } from 'react-redux';
import { addPizzaOrder } from '../actions'

class Order extends Component {
    state = {        
        orderInfo: {
            id: this.props.match.params.oid,
            index: null
        },
        order: {}
    }

    componentDidMount() {        
        // findIndex renvoie l'indice de l'élément recherché
        const index = this.props.orders.findIndex(order => order.id === this.state.orderInfo.id);
        const order = this.props.orders[index]
        this.setState({
            order,
            orderInfo: {
                ...this.state.orderInfo,
                index
            }
        })
    }

    addToOrder = (pizzaId) => {
        const order = { ...this.state.order }
        const orderPizzas = { ...order.pizzas }
        // Vérification s'il y a déjà l'id de la pizza selectionnée présent dans la commande
        if (!orderPizzas[pizzaId]) {
            // si non, nombre de la pizza selectionnée = 1
            orderPizzas[pizzaId] = 1;
        } else {
            // si oui, on incrémente nombre de la pizza selectionnée
            orderPizzas[pizzaId]++;
        }

        order.pizzas = orderPizzas;
        order.total = order.total + this.props.pizzas[pizzaId].price

        // MAJ du state et du localStorage
        this.setState({ order }, () => {
            this.props.addPizzaOrder(order)            
        });
    }

    render() {
        // Object.keys pour le map (le map ne peut être utilisé qu'avec un array, hors ici il s'agit d'un tableau d'objets)
        const pizzasDisplay = Object.keys(this.props.pizzas).map(key => {
            return (
                <Pizza
                    key={key}
                    name={this.props.pizzas[key].name}
                    price={this.props.pizzas[key].price}
                    image={this.props.pizzas[key].image}
                    addToOrder={() => this.addToOrder(key)} />
            );
        });

        return (
            <div className="App">
                <Header />
                <div className="order">
                    <div className="pizzas-wrapper">
                        {pizzasDisplay}
                    </div>

                    <div className="order-details-wrapper">
                        <div className="order-details">
                            <h2>Détail de la commande n°</h2>
                            <h2>{this.state.orderInfo.id}</h2>
                            {this.state.order.id &&
                                <OrderList
                                    order={this.state.order}
                                />
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        pizzas: state.pizzas,
        orders: state.orders
    })
}

const mapDispatchToProps = {
    addPizzaOrder

}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
