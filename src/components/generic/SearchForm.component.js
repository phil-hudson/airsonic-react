// @flow
import * as React from 'react';
import {useState} from 'react';
import {useHistory} from "react-router"

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
    }

    return (
        <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
            <input onChange={handleSearchQueryChange} className="form-control mr-sm-2" type="search" name="search"
                   placeholder="Search" aria-label="Search" value={searchQuery}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
};