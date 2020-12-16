import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas sobre async-await', () => {
    test('Debe retornar el url de la imagen', async () => {
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
    });
});