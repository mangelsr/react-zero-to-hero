import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { PrivateRoute } from '../../routers/PrivateRoute';


describe('Tests over <PrivateRoute />', () => {

    const props = {
        location: { pathname: '/dc' }
    };

    Storage.prototype.setItem = jest.fn();
    
    test('should show the component if user is autheticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={true}
                    component={ () => <span>Ready!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);

        expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', props.location.pathname);
    })
    
    test('should not show the component if the user is not authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={false}
                    component={ () => <span>Ready!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(false);
    });

});