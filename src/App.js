import React, { Component } from 'react';
import Header from './Header/Header';
import SummaryMain from './SummaryMain/SummaryMain';


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  /* this will be passed down to Specs->Feature->Option */
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  /* Specs Component */
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      /* Processor-0 'Operating System'-1 'Video Card'-2 Display-3*/
      const featureHash = feature + '-' + idx;
      /* First time it'll be Processor.map */
      /* Feature Component */
      const options = this.props.features[feature].map(item => {
        /* For each item of each feature. EX  1st item hash will be 
        "name":"17th-Generation-Intel-Core-HB-(7-Core-with-donut-spare)""cost":700*/
        const itemHash = slugify(JSON.stringify(item));
        /* Option Component */
        return (
          <div key={itemHash} className="feature__item">

            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });




      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            {/* Feature Component */}
            <h3>{feature}</h3>
          </legend>
          {/* Option Component */}
          {options}
        </fieldset>
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    /* Summary Component */



    /* Total Component */


    return (
      <div className="App">
        {/* Header Component */}
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <SummaryMain selected={this.state.selected} handleCurrency={USCurrencyFormat} total={total} />
        </main>
      </div>
    );
  }
}

export default App;
