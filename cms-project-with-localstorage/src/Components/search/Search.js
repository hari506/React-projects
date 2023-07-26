import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Search = () => {
    let [searchVal, setSearchVal] = useState('')
    let navigat = useNavigate();
    let location = useLocation();

    let usersSearchVal = new URLSearchParams(location.search).get('users');
    useEffect(() => {
        setSearchVal(usersSearchVal ? usersSearchVal : '')
    }, [usersSearchVal])

    const handlFormSubnit = (e) => {
        e.preventDefault();
        console.log("form Submitted");
        navigat(`/?users=${searchVal}`)
    }

    return (
        <div className="search-container">
            <div className="row">
                <div className="col-sm-12">
                    <form className="search-from" onSubmit={handlFormSubnit}>
                        <div className="row">
                            <div className="col-sm-10">
                                <input type='text' value={searchVal} placeholder='enter search value' onChange={(e) => setSearchVal(e.target.value)} />
                            </div>
                            <div className="col-sm-2">
                                <button type='submit'>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;