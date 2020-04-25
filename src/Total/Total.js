import React, { Component } from 'react';
import './Total.css';



class Total extends Component {

    total(selected) {
        Object.keys(selected).reduce(
            (acc, curr) => acc + selected[curr].cost,
            0
        );
    }
    
    render() {

        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.props.handleCurrency.format(this.total(this.props.selected))}
                </div>
            </div>
        );
    }
}

export default Total;