import React, { useMemo } from 'react';
import queryString from "query-string";
import { useLocation } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../ui/heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({ search: q });
    
    const { search } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    
    const submitForm = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`);
    };

    return (
        <div>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <form onSubmit={submitForm}>
                        <input
                            value={search}
                            onChange={handleInputChange}
                            autoComplete="off"
                            name="search"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control" />
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block mt-4">
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <br/>
                    { (q === '') &&
                        <div className="alert alert-info">Search a hero</div>
                    }
                    { (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-warning">No hero found for {q}</div>
                    }
                    { heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero} />)}
                </div>
            </div>
        </div>
    )
}
