import React, { Component } from 'react'
import './Option.css';
import slugify from 'slugify';


class Option extends Component {

    render() {
        const options = (this.props.features[this.props.feature]).map(item => {
            const itemHash = slugify(JSON.stringify(item));

            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(this.props.feature)}
                        checked={item.name === this.props.selected[this.props.feature].name}
                        onChange={e => this.props.handleUpdate(this.props.feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} {this.props.handleCurrency.format(item.cost)}
                    </label>
                </div>
            );
        });
        
        return options;
    }
}


export default Option;