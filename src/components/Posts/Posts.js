import React from 'react';

import('./Post.css')

const Posts = (item) => {

    const {id, title, body} = item;

    return (
        <div className={'postD'}>

            <p>{id}</p>

            <h5>{title}</h5>
            <p>{body}</p>

        </div>
    );
};

export {Posts};