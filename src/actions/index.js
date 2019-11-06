import { ADD_ORDER, ADD_PIZZA_ORDER } from './types';

// On définit une action pour ajouter une commande de pizzas => on envoie cette action dans le composant NewOrder dans le mapDispatchToProps
export const addOrder = (id) => {
    return ({
        type: ADD_ORDER,
        payload: {
            id,
            pizzas: {},
            total: 0,
            paid: false
        }
    });
};

export const addPizzaOrder = (order) => {
    return ({
        type: ADD_PIZZA_ORDER,
        payload: {
            order
        }
    });
};
