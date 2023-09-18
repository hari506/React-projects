import { useState } from "react";
import React from "react";
import List from "./components/ListItems";

const App = () => {
  let [showCities, setShowCities] = useState(false);
  let [selectedCities, setSelectedCities] = useState('')

  const countries = [
    { name: 'India', code: 'IN', cities: ['HYD', 'DELHI'] },
    { name: 'India1', code: 'IN1', cities: ['HYD1', 'DELHI1'] },
    { name: 'India2', code: 'IN2', cities: ['HYD2', 'DELHI2'] }
  ];

  const handleEnableCities = (e) => {
    if (e.target.value) {
      console.log('--eable citieys--')
      let index = countries.findIndex(coutnry => coutnry.code === e.target.value);
      if (index > -1) {
        setSelectedCities(countries[index].cities);
        setShowCities(true);
      }
    }
  }
  return (
    <div>
      <div className="countries-drop-down" onChange={(e) => handleEnableCities(e)}>
        <select>
          <option value=''> select the coutnry </option>
          {
            countries.map((country, index) => <option value={country.code} key={index}>{country.name}</option>)
          }
        </select>
      </div>

      {
        showCities === true ?
          <select>
            {
              selectedCities.map((city, index) => <option key={index} value={city}>{city}</option>)
            }
          </select>
          :
          ''
      }
      <List />
    </div>
  );
}

export default App;
