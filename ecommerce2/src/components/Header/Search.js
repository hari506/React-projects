import {  useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

const Search = () => {
    let [searchVal, setSearchVal] = useState('');
    let navigate = useNavigate();
    let location = useLocation();
    let urlSearchVal = new URLSearchParams(location.search).get('search');

    useEffect(() => {
        //console.log(urlSearchVal);
        setSearchVal(urlSearchVal || "")
    }, [urlSearchVal])
    
   

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(location.pathname + '?search='+ searchVal);
    }

    const handleSearchInput = (event) => {
        //console.log(event.target.value)
        setSearchVal(event.target.value)
    }

    return (
        <div className="searchBox-container">
            <form>
                <input name="search" type="text"
                    id="search" placeholder="Enter product name, category"
                    value={searchVal}
                    onChange={handleSearchInput}
                />
                <button onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                        height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
        </div>
    )
}

export default Search;