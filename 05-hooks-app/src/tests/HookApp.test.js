import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import { HooksApp } from '../HooksApp';


describe('HookApp component test', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<HooksApp />);
        expect(wrapper).toMatchSnapshot();
    }); 
});
 