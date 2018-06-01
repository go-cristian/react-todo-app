// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
