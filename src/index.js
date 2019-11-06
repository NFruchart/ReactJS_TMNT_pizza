import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import NewOrder from './components/NewOrder';
import Order from './components/Order';
import Orders from './components/Orders';
import PaymentOrder from './components/PaymentOrder';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Création du store
const store = createStore(rootReducer)

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/new" component={NewOrder} />
                <Route path="/order/:oid" component={Order} />
                <Route path="/orders" component={Orders} />
                <Route path="/payment-order" component={PaymentOrder} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(
    // On englobe l'application dans le Provider pour la connexion avec le store
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
