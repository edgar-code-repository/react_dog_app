import React from 'react';

import { shallow } from 'enzyme';

import Navbar from './Navbar';

it('renders navbar section', () => {
    const navbarComponent = shallow(<Navbar />).find('.navbar');
    expect(navbarComponent.exists()).toBe(true);
});