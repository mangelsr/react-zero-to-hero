import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';

import { useForm } from '../../hooks/useForm';


describe('Tests for useForm Hook', () => {
    
    const initialForm = {
        name: 'Miguel',
        email: 'mangelsr25@gmail.com'
    };

    test('should return a default form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ initialValue, handleChange, reset ] = result.current;
        expect(initialValue).toEqual(initialForm);
        expect(typeof handleChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should change form value', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const handleChange = result.current[1];
        act(() => {
            handleChange({target: {name: 'name', value: 'Angel'}});
        });
        expect(result.current[0]).toEqual({...initialForm, name:'Angel'});
    });

    test('should change form value', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const handleChange = result.current[1];
        const reset = result.current[2];
        act(() => {
            handleChange({target: {name: 'name', value: 'Angel'}});
            reset();
        });
        expect(result.current[0]).toEqual(initialForm);
    });
    
});