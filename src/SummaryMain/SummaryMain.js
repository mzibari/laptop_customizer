import React, { Component } from 'react';
import './SummaryMain.css';
import SummaryOption from '../SummaryOption/SummaryOption';
import Total from '../Total/Total';


class SummaryMain extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryOption selected={this.props.selected} handleCurrency={this.props.handleCurrency} />
                <Total selected={this.props.selected} handleCurrency={this.props.handleCurrency} />
            </section>
        );
    }
}


export default SummaryMain;
