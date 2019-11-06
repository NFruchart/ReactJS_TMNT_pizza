import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../actions'; // On importe la fonction liée à l'action de type ADD_ORDER

class NewOrder extends Component {

    componentDidMount() {
        const id = `CMD-${Date.now()}`;
        this.props.addOrder(id);
        this.props.history.push(`order/${id}`);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapDispatchToProps = {
    addOrder: addOrder    
}

export default connect(null, mapDispatchToProps)(NewOrder);
