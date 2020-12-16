import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';

import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';


describe('LoginScreen component tests', () => {

    const setUser = jest.fn();
    
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('should render the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should execute setUser with expected argument', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toBeCalledWith({
            id:123,
            name:'Miguel'
        });
    });
    
});