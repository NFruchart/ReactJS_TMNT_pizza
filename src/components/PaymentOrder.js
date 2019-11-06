import React, { Component } from 'react'
import Header from './Header'
import OrderList from './OrderList';

export default class PaymentOrder extends Component {
    state = {
        orders: JSON.parse(localStorage.getItem("orders")) || [],
        selectedOrder: []
    }

    handleChange(e) {
        const id = e.target.value;
        const selectedOrder = this.state.orders.find(order => order.id === id);
        if (selectedOrder) {
            this.setState({ selectedOrder })
        }
    }

    setPaid() {
        const orders = [...this.state.orders];
        const index = orders.findIndex(order => order.id === this.state.selectedOrder.id);
        const selectedOrder = {...this.state.selectedOrder};
        selectedOrder.paid = true;
        orders[index] = selectedOrder

        this.setState({
            orders,
            selectedOrder: {}
        }, () => {
            localStorage.setItem("orders", JSON.stringify(this.state.orders))
        })
    }

    selectedOrderDisplay() {
        if (Object.keys(this.state.selectedOrder).length > 0) {
            return (
                <div className="order-details">
                    <h2>Détail de la commande n°{this.state.selectedOrder.id}</h2>
                    <OrderList 
                    order={this.state.selectedOrder} 
                    paidButton={true}
                    setPaid={() => this.setPaid()}/>
                </div>
            )
        }
    }    

    render() {
        const ordersListDisplay = this.state.orders.filter(order => !order.paid).map(order => {
            return (
                <option key={order.id} value={order.id}>
                    {order.id} - {order.total.toFixed(2)} €
                </option>
            )
        });

        return (
            <div className="App">
                <Header />
                <div className="payment-wrapper">
                    <div className="order-selection">
                        <label htmlFor="orderSelect">Selectionner la commande à encaisser</label>
                        <select name="" id="orderSelect" onChange={e => this.handleChange(e)}>
                            <option value=""></option>
                            {ordersListDisplay}
                        </select>
                    </div>
                    <div className="payment-order">
                        <div className="order-details-wrapper">
                            {this.selectedOrderDisplay()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
