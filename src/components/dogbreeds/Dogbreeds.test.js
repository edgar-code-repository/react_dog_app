import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { shallow, mount } from 'enzyme';
import Dogbreeds from './Dogbreeds';


it('renders dog breeds section', () => {
    const dogBreedsComponent = shallow(<Dogbreeds />).find('.page-section-dogs');
    expect(dogBreedsComponent.exists()).toBe(true);
});

it('renders loading image', () => {
    const dogBreedsComponent = shallow(<Dogbreeds />);
    dogBreedsComponent.setState({ isLoading: true });

    expect(dogBreedsComponent.find("#image-loading").exists()).toBe(true);
});

it('renders breeds select and sub-breeds select', () => {
    const dogBreedsComponent = shallow(<Dogbreeds />);
    
    const message_breeds_mock = {
        message: {
            "akita":[],
            "boxer":[],
            "bulldog":["boston","english","french"],
            "hound":["afghan","basset","blood","english","ibizan","walker"]
        },
        status: "success"
    }

    const breeds_list = [
        "akita", "boxer", "bulldog", "hound"
    ]

    dogBreedsComponent.setState({ isLoading: false, message_breeds: message_breeds_mock, dogbreeds_data: breeds_list });

    expect(dogBreedsComponent.find("#breed").exists()).toBe(true);
    expect(dogBreedsComponent.find("#breed option").length).toBe(5);

    //console.log(dogBreedsComponent.find("#breed").first().text());
    //console.log(dogBreedsComponent.find("#breed option").length);

    expect(dogBreedsComponent.find("#subBreed").exists()).toBe(true);
    expect(dogBreedsComponent.find("#subBreed option").length).toBe(1);

    //console.log(dogBreedsComponent.find("#subBreed").first().text());
    //console.log(dogBreedsComponent.find("#subBreed option").length);

});

