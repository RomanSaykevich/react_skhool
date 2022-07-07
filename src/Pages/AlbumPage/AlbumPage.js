import React, {useEffect, useState} from 'react';

import Album from "../../Components/Album/Album";
import {getAlbums} from "../../services/albums.service/albums.service";


const AlbumPage = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        getAlbums().then(({data}) => setAlbums([...data]))
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
