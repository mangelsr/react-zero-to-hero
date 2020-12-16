import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';

import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';


jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');

describe('Tests over MultipleCustomHooks component', () => {
    
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });
    
    test('should match snapshot', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show info', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Miguel',
                quote: 'Hello World'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hello World');
        expect(wrapper.find('footer').text().trim()).toBe('Miguel');
    });

});