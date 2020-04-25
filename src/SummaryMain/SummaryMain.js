import React, { Component } from 'react';
import './SummaryMain.css';
import SummaryOption from '../SummaryOption/SummaryOption';

class SummaryMain extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryOption selected={this.props.selected} handleCurrency={this.props.handleCurrency} />
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {this.props.handleCurrency.format(this.props.total)}
                    </div>
                </div>
            </section>
        );
    }
}


export default SummaryMain;
