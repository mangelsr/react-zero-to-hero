import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../../selectors/getHeroById';


export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();

    const hero = useMemo(() => getHeroesById(heroId), [heroId]);
    
    if (!hero) {
        return <Redirect to="/"/>;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');    
        } else {
            history.goBack();
        }
    };

    return (
        <div className="row">
            <div className="col-4">
                <img className="img-thumbnail animate__animated animate__fadeInLeft" src={`../assets/${heroId}.jpg`}
                alt={superhero} />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b> {first_appearance}
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{ characters }</p>
                <button onClick={handleReturn} className="btn btn-outline-info">Return</button>
            </div>
        </div>
    );
}
