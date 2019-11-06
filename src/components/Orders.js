import React, { Component, Fragment } from 'react';
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Orders extends Component {
    state = {
        orders: JSON.parse(localStorage.getItem("orders")) || []
    }

    editOrder = (id) => {
        this.props.history.push(`order/${id}`)
    }

    deleteOrder = (id) => {
        const orders = [...this.state.orders];
        const index = orders.findIndex(order => order.id === id);
        orders.splice(index, 1);
        this.setState({ orders }, () => {
            localStorage.setItem("orders", JSON.stringify(this.state.orders));
        })
    }

    ordersListDisplay = () => {
        return this.state.orders.map(order => {
            return (
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.total.toFixed(2)} €</td>
                    <td className={order.paid ? "bg-success" : "bg-warning"}>
                        {order.paid ? "Réglé" : "En attente de paiement"}</td>
                    <td className="order-actions">

                        {!order.paid &&
                            <Fragment>
                                <button className="order-action-edit"
                                    onClick={() => this.editOrder(order.id)}>
                                    <FontAwesomeIcon icon="edit" />
                                </button>

                                <button className="order-action-delete"
                                    onClick={() => this.deleteOrder(order.id)}>
                                    <FontAwesomeIcon icon="trash" />
                                </button>
                            </Fragment>

                        }
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className="App">
                <Header />
                <div className="orders-list">
                    <h2>Liste des commandes</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Total commande</th>
                                <th>Statut commande</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.ordersListDisplay()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
