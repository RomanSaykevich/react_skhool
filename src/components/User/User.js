import React from 'react';

import ('./User.css')

const User = ({item, getPostUser}) => {

    return (

        <div className={'user'}>

            <h3>{item.id}</h3>
            <h3>{item.name}</h3>

            <button onClick={() => {
                getPostUser(item.id)
            }}> go Post
            </button>

        </div>

    );
};

export {User};