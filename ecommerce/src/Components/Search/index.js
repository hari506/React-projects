import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"

const HeaderSearch = () => {
    let navigater = useNavigate();
    let location = useLocation();
    let [searchVal, setSearchVal] = useState("");

    useEffect(() => {
        let serachParams = new URLSearchParams(location.search).get("search");
        setSearchVal(serachParams || "")

    }, [location.search])
    
    const handleChangeSearchVal = e => {
        setSearchVal(e.target.value);
    }

    const handleSearchFormSubmit = e => {
        e.preventDefault();
        navigater(`/?search=${searchVal}`)
    }

    return (
        <form onSubmit={handleSearchFormSubmit}>
            <input name="search" type="text"
                id="search" placeholder="Enter product name, category" value={searchVal} onChange={handleChangeSearchVal} />
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                    height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </button>
        </form>
    )
}

export default HeaderSearch;