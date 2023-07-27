import { useEffect, useState } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import WhetherCard from './Components/WhetherCard';

function App() {

  let [cityName, setCityName] = useState("hyderabad");
  let [isWhetherReady, setIsWhetherReportReady] = useState(false)
  let [wheterReport, setWheterReport] = useState({})
  let [errroMessage, setErrorMessage] = useState('')
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const city = await fetchCityName(cityName);
    if(city){
      getWhetherReport(city);
      setCityName(city)
    }else{
      setErrorMessage('City Not Found')
    }
  }

  const handleInputVal = e => {
    setCityName(e.target.value)
  }

  const getWhetherReport = async (city) => {

    try {
      console.log(cityName)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cfb90ecdc4d7d1f2e4a21743fceb4632`)
      const whetherReprot = await response.json();
      console.log(wheterReport)
      if (whetherReprot.cod == 404) {
        setIsWhetherReportReady(false)
        setErrorMessage(whetherReprot.message)
      } else {
        setWheterReport(whetherReprot);
        setIsWhetherReportReady(true)
      }
    } catch (error) {
      console.log(error)
      setIsWhetherReportReady(false)
    }
  }

  const fetchCityName = async (cityName) => {

    try {
      let api_key = 'y7RhLjId2jP+arS2RvhznA==xUg15Sw0Mi1ynXaq';
      let api_url = `https://api.api-ninjas.com/v1/city?name=${cityName}`
      let response = await fetch(api_url, {
        headers: { 'X-Api-Key': `${api_key}` }
      })

      let cityData = await response.json();
      return cityData[0]?.name ? cityData[0].name : '';
    } catch (error) {
      console.log(error);
      return '';
    }

  }

  useEffect(() => {
    getWhetherReport(cityName);
  }, [])
  return (
    <>
      <SearchForm handleForm1={handleFormSubmit} handleInput={handleInputVal} cityName={cityName} />
      <div className="app">
        {
          isWhetherReady ?
            <WhetherCard {...wheterReport} />
            :
            <div className='error-message'> {errroMessage} </div>
        }
      </div>

    </>
  );
}

export default App;
