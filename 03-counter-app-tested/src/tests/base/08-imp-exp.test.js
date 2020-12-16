import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {
    test('Debe de reotrnar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        const heroData = heroes.find(h => h.id === id);
        expect(hero).toEqual(heroData);
    });

    test('Debe de reotrnar undefined si heroe no existe', () => {
        const id = 10;
        const hero = getHeroeById(id);
        expect(hero).toBe(undefined);
    });

    test('Debe de reotrnar heroes de DC', () => {
        const owner = 'DC';
        const heroesExpected = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroesExpected).toEqual(heroesData);
    });

    test('Debe de reotrnar heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesExpected = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroesExpected.length).toBe(heroesData.length);
    });
});