import React from 'react';

const RickandMortys = () => {

    const rickMorty = [];
    fetch('https://rickandmortyapi.com/')
        .then(value => value.json())
        .then(value => value)
    console.log(value)
    return (
        <div>
            {
            }
        </div>
    );
};

export default RickandMortys;