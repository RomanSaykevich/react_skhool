import React from 'react';

const UserDetails = (item) => {

    const {id, name, username, email} = item

    return (
        <div>

            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>


        </div>
    );
};

export default UserDetails;