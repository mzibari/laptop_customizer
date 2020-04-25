import React, { Component } from 'react';
import Header from './Header/Header';
import SummaryMain from './SummaryMain/SummaryMain';
import Specs from './Specs/Specs';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes


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


    return (
      <div className="App">
        <Header />
        <main>
          <Specs
            features={this.props.features}
            handleUpdate={this.updateFeature}
            handleCurrency={USCurrencyFormat}
            selected={this.state.selected} />
          {/* 
            {features}
           */}
          <SummaryMain selected={this.state.selected} 
          handleCurrency={USCurrencyFormat} />
        </main>
      </div>
    );
  }
}

export default App;
