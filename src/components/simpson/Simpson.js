import React from 'react';

const Simpson = (props) => {
    const {name, photo, age, sex, status, history} = props;
    return (
        <div>
            <h2>{name}</h2>
            <img src={photo} alt=""/>
            <p>Age: {age} </p>
            <p>Sex: {sex}</p>
            <p>Status: {status}</p>
            <h4>History: {history}</h4>
        </div>
    );
};

export default Simpson;