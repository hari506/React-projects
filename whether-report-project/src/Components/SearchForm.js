import React, { useEffect } from 'react'

const SearchForm = (props)  => {

    useEffect(() => {
        const fetchCityName = async (cityName) =>{
            let api_key = 'y7RhLjId2jP+arS2RvhznA==xUg15Sw0Mi1ynXaq';
            let api_url = `https://api.api-ninjas.com/v1/city?name=${cityName}`
            let response = await fetch(api_url, {
                headers: {'X-Api-Key': `${api_key}`}
            })

            let cityData = await response.json();
            console.log(cityData[0].name)
        }
        fetchCityName('hyd');

    }, [])

    return (
        <div className='search-form'>
            <form onSubmit={props.handleForm1}>
                <input type='text' onChange={props.handleInput} className='city-name' value={props.cityName}/>
                <button type='submit' className='city-search'>Search</button>
            </form>
        </div>
    )
}

export default SearchForm
