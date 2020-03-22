import React, {useEffect, useState} from "react";
import APIServiceUtil from '../../services/APIServiceUtil';
import AlbumGrid from '../generic/AlbumGrid.component';
import '../../css/_font.scss';

const Home = () => {

    const [randomAlbums, setRandomAlbums] = useState([]);
    const [newestAlbums, setNewestAlbums] = useState([]);
    const [recentAlbums, setRecentAlbums] = useState([]);

    const getAlbums = async(type) => {
        let res = await fetch(APIServiceUtil.augmentAirsonicAPI('/rest/getAlbumList2?size=20&type=' + type), {
            crossDomain: true,
            method: 'GET',
        });

        if (res.status === 200) {
            res = await res.json();
            return res['subsonic-response']['albumList2']['album'];
        }

        throw new Error(res.status);
    };

    const getRandomAlbums = async () => {
        let albums = await getAlbums('random');
        setRandomAlbums(albums);
    };

    const getNewestAlbums = async () => {
        let albums = await getAlbums('newest');
        setNewestAlbums(albums);
    };

    const getRecentAlbums = async () => {
        let albums = await getAlbums('recent');
        setRecentAlbums(albums);
    };

    useEffect(() => {
        async function loadAlbums() {
            await getRandomAlbums();
            await getNewestAlbums();
            await getRecentAlbums();
        }

        loadAlbums();
    }, []);

    return (
        <div>
            <h1 className='main-title medium-pad'>Recent</h1>

            {
                recentAlbums.length > 0 ? (
                    <AlbumGrid albums={recentAlbums}/>
                ) : (
                    <p>no songs</p>
                )
            }
            <h1 className='main-title medium-pad'>Newest</h1>

            {
                newestAlbums.length > 0 ? (
                    <AlbumGrid albums={newestAlbums}/>
                ) : (
                    <p>no songs</p>
                )
            }
            <h1 className='main-title medium-pad'>Random</h1>

            {
                randomAlbums.length > 0 ? (
                    <AlbumGrid albums={randomAlbums}/>
                ) : (
                    <p>no songs</p>
                )
            }
        </div>
    );

}

export default Home