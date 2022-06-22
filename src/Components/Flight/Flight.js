import React from 'react';

const Flight = ({item, mission_name, launch_year, mission_patch_small}) => {

    return (

        <div>

            {mission_name} ---
            {launch_year} ---
            <img src={mission_patch_small} alt={mission_patch_small}/>

        </div>

    );
};

export default Flight;