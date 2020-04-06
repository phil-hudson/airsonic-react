// @flow
import * as React from 'react';
import {useState} from 'react';
import {useHistory} from "react-router"
import '../../css/search.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function SearchForm() {
    const [searchQuery, setSearchQuery] = useState();
    const history = useHistory();

    const handleSearchQueryChange = (event) => {
        event.persist();
        setSearchQuery(event.target.value);
    };

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }
        // trigger route with query
        history.push("/search-results?query=" + searchQuery);
    };

    return (
        <div id="searchBarWrap">
            <form id="searchForm" onSubmit={handleSubmit} className="">
                <input id='searchBar' onChange={handleSearchQueryChange} className="" type="search" name="search"
                       placeholder="Search & Explore..." aria-label="Search" value={searchQuery}/>
                <button  id="searchBtn"  form='searchForm' content='Submit' value='Submit'><FontAwesomeIcon icon={faCoffee} /></button>
            </form>
        </div>


    );
};