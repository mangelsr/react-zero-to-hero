import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser() debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(userTest).toEqual(user);
    });
    
    test('getUsuarioActivo() debe de retornar un objeto', () => {
        const activeUserTest = {
            uid: 'ABC567',
            username: 'Miguel'
        };
        const activeUser = getUsuarioActivo('Miguel');
        expect(activeUserTest).toEqual(activeUser);
    });

});