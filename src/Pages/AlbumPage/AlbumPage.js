import React, {useEffect, useState} from 'react';


import {getAlbums} from "../../services/albums.service/albums.service";
import {Album} from "../../Components";


const AlbumPage = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        getAlbums().then(value => setAlbums([...value]))
    }, [])

    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export default AlbumPage;
