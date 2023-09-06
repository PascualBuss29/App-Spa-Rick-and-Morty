import React, { useEffect, useState } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';
import Card from './Card'
import { cleanup } from '@testing-library/react';

const Cards = () => {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        RickAndMortyService.getAllCharacters()
        .then((data) => setPersonajes(data.results))
        .catch((error) => console.log(error))      
    }, []);

    const cardsList = personajes.map((p) => <Card personaje={p} key={p.id} />)
    return (
        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {cardsList}
                </div>
            </div>
        </div>
    )
}

export default Cards


