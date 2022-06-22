import React, {useEffect, useState} from 'react';

import Flight from "../Flight/Flight";

const Flights = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setFlights(value.filter(flights => flights.launch_year !== '2020')));

    }, [])

    return (

        <div>
            {
                flights.map((flights, index) => <Flight key={index} mission_name={flights.mission_name} launch_year={flights.launch_year} mission_patch_small={flights.links.mission_patch_small}/>)
            }
        </div>
    );
};

export default Flights;