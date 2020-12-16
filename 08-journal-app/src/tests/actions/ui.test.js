import '@testing-library/jest-dom';

import { finishLoading, removeError, setError, startLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('tests for ui actions', () => {
    
    test('all actions shoud work', () => {
        const error = 'Error test';
        const action = setError(error);
        expect(action).toEqual({
            type: types.uiSetError,
            payload: error
        });

        const removeErrorAction = removeError();
        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });

        const startLoadingAction = startLoading();
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });

        const finishLoadingAction = finishLoading();
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });

    });
    
});