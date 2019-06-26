import React from 'react';

import { shallow } from 'enzyme';

import About from './About';

it('renders about section', () => {
    const aboutComponent = shallow(<About />).find('.page-section-about');
    expect(aboutComponent.exists()).toBe(true);
});