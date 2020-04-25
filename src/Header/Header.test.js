import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom';
/* import renderer from 'react-test-renderer'; */

describe('Header Component tests', () => {
    it ('Renders without error', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Header snapshot', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    });

}) 