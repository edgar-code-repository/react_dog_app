import React from 'react';

import { shallow } from 'enzyme';

import Footer from './Footer';

it('renders footer section', () => {
    const footerComponent = shallow(<Footer />).find('.footer');
    expect(footerComponent.exists()).toBe(true);
});