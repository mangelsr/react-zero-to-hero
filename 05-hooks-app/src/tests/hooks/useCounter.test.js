import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter';


describe('Test over useCounter', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('should return initial value', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        expect(result.current.counter).toBe(initialValue);
    });

    test('should increment counter', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { increment } = result.current;
        act(() => {
            increment();
        });
        const { counter } = result.current;
        expect(counter).toBe(initialValue+1);
    });

    test('should decrement counter', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { decrement } = result.current;
        act(() => {
            decrement();
        });
        const { counter } = result.current;
        expect(counter).toBe(initialValue-1);
    });

    test('should reset counter', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { decrement, reset } = result.current;
        act(() => {
            decrement();
            reset();
        });
        const { counter } = result.current;
        expect(counter).toBe(initialValue);
    });
});