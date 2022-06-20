import React from 'react';

import RickandMorty from "../rickandmorty/RickandMorty";
import('./RickMortys.css')

const RickandMortys = () => {
    return (
        <div className={'ricks'}>
            <RickandMorty
                id={'207'}
                name={'Loggins'}
                image={"https://rickandmortyapi.com/api/character/avatar/207.jpeg"}
                status={'Alive'}
                species={'Alien'}
                type={'Alligator-Person'}
                gender={'Male'}
            /><RickandMorty
            id={'226'}
            name={'Million Ants'}
            image={'https://rickandmortyapi.com/api/character/avatar/226.jpeg'}
            status={'Dead'}
            species={'Animal'}
            type={'Sentient ant colony'}
            gender={'Male'}
        /><RickandMorty
            id={'305'}
            name={'Scary Glenn'}
            image={'https://rickandmortyapi.com/api/character/avatar/305.jpeg'}
            status={'Alive'}
            species={'Mythological Creature'}
            type={'Monster'}
            gender={'Male'}
        /><RickandMorty
            id={'534'}
            name={'Tony\'s Dad'}
            image={'https://rickandmortyapi.com/api/character/avatar/534.jpeg'}
            status={'Alive'}
            species={'Alien'}
            type={''}
            gender={'Male'}
        /><RickandMorty
            id={'783'}
            name={'Memory Rick'}
            image={'https://rickandmortyapi.com/api/character/avatar/783.jpeg'}
            status={'Dead'}
            species={'Human'}
            type={'Memory'}
            gender={'Male'}
        /><RickandMorty
            id={'796'}
            name={'Sarge'}
            image={'https://rickandmortyapi.com/api/character/avatar/796.jpeg'}
            status={'Alive'}
            species={'Alien'}
            type={'Normal Size Bug'}
            gender={'Male'}
        />
        </div>
    );
};

export default RickandMortys;