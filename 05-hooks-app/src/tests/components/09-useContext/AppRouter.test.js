import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('AppRouter component tests', () => {
   
    const user = {
        id: 1,
        name: 'Miguel'
    };
    
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    
    );

    test('should render the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

});