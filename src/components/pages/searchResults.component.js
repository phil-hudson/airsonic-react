import React, {useEffect, useState} from "react";
import APIServiceUtil from '../../services/APIServiceUtil';
import AlbumGrid from '../generic/AlbumGrid.component';
import ArtistGrid from '../generic/ArtistGrid.component';
import TrackList from '../generic/TrackList.component';

const SearchResults = (props) => {

    const [searchResults, setSearchResults] = useState("");
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);

    const getSearch = (searchString) => {
        fetch(APIServiceUtil.augmentAirsonicAPI(`/rest/search3?query=${searchString}`), {
            crossDomain: true,
            method: 'GET',
        })
            .then(res => res.json())
            .then((data) => {
                // this.setState({ contacts: data })
                console.log('success');
                console.log(data);
                if (data['subsonic-response']['status'] === 'ok') {
                    // store songs
                    setSearchResults(data['subsonic-response']['searchResult3']);
                    if (data['subsonic-response']['searchResult3'].hasOwnProperty('album')) {
                        setAlbums(data['subsonic-response']['searchResult3']['album']);
                    }
                    if (data['subsonic-response']['searchResult3'].hasOwnProperty('song')) {
                        setSongs(data['subsonic-response']['searchResult3']['song']);
                    }
                    if (data['subsonic-response']['searchResult3'].hasOwnProperty('artist')) {
                        setArtists(data['subsonic-response']['searchResult3']['artist']);
                    }
                } else {
                    console.warn(data);
                }
            })
            .catch(console.log)
    }

    useEffect(() => {
        // TODO tidy this to get the query param
        getSearch(props.location.search.split('=')[1]);
    }, []);

    return (
        <div>
            <h2>Artists</h2>
            {
                artists.length > 0 && (
                    <ArtistGrid artists={artists} />
                )
            }
            <h2>Album</h2>
            {
                albums.length > 0 && (
                    <AlbumGrid albums={albums}/>
                )
            }
            <h2>Songs</h2>
            {
                songs.length > 0 && (
                    <TrackList tracks={songs} />
                )
            }
        </div>
    );

}

export default SearchResults