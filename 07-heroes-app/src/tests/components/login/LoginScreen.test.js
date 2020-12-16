import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';


describe('Tests over <LoginScreen/> component', () => {

    const historyMock = {
        replace: jest.fn(),
    };

    const userContext = {
        dispatch: jest.fn(),
    };

    const wrapper = mount(
        <AuthContext.Provider value={userContext}>
            <LoginScreen history={historyMock} />
        </AuthContext.Provider>
    );

    test('should render the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should dispatch action and called replace', () => {
        wrapper.find('button').simulate('click');
        
        expect(userContext.dispatch).toHaveBeenCalledTimes(1);
        expect(userContext.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Miguel'
            }
        });

        expect(historyMock.replace).toHaveBeenCalled();
        expect(historyMock.replace).toHaveBeenCalledWith('/');

        const lastPath = '/dc';
        localStorage.setItem('lastpath', lastPath);
        
        wrapper.find('button').simulate('click');
        
        expect(historyMock.replace).toHaveBeenCalledWith(lastPath);
    });
    
});