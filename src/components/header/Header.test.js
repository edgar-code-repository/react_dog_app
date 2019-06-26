import React from 'react';

import { shallow } from 'enzyme';

import Header from './Header';

it('renders header section', () => {
    const headerComponent = shallow(<Header />).find('.masthead');
    expect(headerComponent.exists()).toBe(true);
});