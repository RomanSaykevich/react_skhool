import React from 'react';

import('./RickMorty.css')

const RickandMorty = (props) => {
    const {id, name, image, status, species, type, gender,} = props;
    return (
        <div className={'morty'}>
            <h4>ID - {id}</h4>
            <h2>{name}</h2>
            <img src={image} alt=""/>
            <p>Status - {status}</p>
            <p>Species - {species}</p>
            <p>Type - {type}</p>
            <p>Gender - {gender}</p>
        </div>
    );
};

export default RickandMorty;