import React, { Component } from 'react';
import './Specs.css';
import Option from '../Option/Option';


class Specs extends Component {

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <Option feature={feature}
                        features={this.props.features}
                        selected={this.props.selected}
                        handleCurrency={this.props.handleCurrency}
                        handleUpdate={this.props.handleUpdate} />
                </fieldset>
            );
        });
        
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>);
    }
}

export default Specs;