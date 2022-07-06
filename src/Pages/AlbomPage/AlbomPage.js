import React, {useEffect, useState} from 'react';
// import {getAlboms} from "../../services/alboms.service/alboms.service";
import Albom from "../../Components/Albom/Albom";

const AlbomPage = () => {
    const [alboms, setAlboms] = useState([])

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/alboms')
        .then(value => value.json())
        .then(value => setAlboms([...value]))
    },[])

    return (
        <div>
            {
                alboms.map(alboms => <Albom key={alboms.id} alboms={alboms}/>)
            }
        </div>
    );
};

export default AlbomPage;