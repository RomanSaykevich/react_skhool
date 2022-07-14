import React, {useEffect, useState} from 'react';

import {Album} from "../../Components";
import {getAlbums} from "../../Services/albums.service/albums.service";


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
