import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import React from 'react';

import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('HomeScreen component tests', () => {

    const user = {
        name: 'Miguel',
        email: 'mangelsr25@gmail.com'
    };
    
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }} >
            <HomeScreen />
        </UserContext.Provider>
    );
   
    test('should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

});