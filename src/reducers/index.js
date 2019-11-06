import pizzas from '../pizzas';
import { ADD_ORDER, ADD_PIZZA_ORDER } from '../actions/types'

const initialState = {
    pizzas,
    orders: JSON.parse(localStorage.getItem("orders")) || []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ORDER:
            const addOrderOrders = [...state.orders, action.payload];
            localStorage.setItem("orders", JSON.stringify(addOrderOrders));
            return ({
                ...state,
                orders: addOrderOrders
            });
        case ADD_PIZZA_ORDER:
            const index = state.orders.findIndex(order => {
                return order.id === action.payload.order.id;
            });
            const addPizzaOrderOrders = [...state.orders];
            addPizzaOrderOrders[index] = action.payload.order;

            localStorage.setItem("orders", JSON.stringify(addPizzaOrderOrders));            
            return ({
                ...state,
                orders: addPizzaOrderOrders
            });
        default:
            return state
    }
}