import React from 'react';

const User = ({item, userButton}) => {


    return (

        <div>

            <h5>{item.id}</h5>
            <h5>{item.name}</h5>

            <button onClick={() => {userButton(item);}}>User Details</button>

        </div>

    );
};

export default User;