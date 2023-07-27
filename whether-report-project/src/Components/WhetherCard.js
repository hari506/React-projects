import React from 'react'

function WhetherCard(props) {

    const {name} = props;
    const {main: weatherType} = props.weather[0];
    const {country, sunset} = props.sys;
    const {temp, humidity, pressure} = props.main;
    const {speed} = props.wind;

    let date = new Date(sunset * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    let whetherTypeIcon = ''
    if (weatherType) {
        switch (weatherType) {
          case "Clouds":
            whetherTypeIcon = "wi-day-cloudy";
            break;
          case "Haze":
            whetherTypeIcon = "wi-fog";
            break;
          case "Clear":
            whetherTypeIcon = "wi-day-sunny";
            break;
          case "Mist":
            whetherTypeIcon = "wi-dust";
            break;
          case "Rain":
            whetherTypeIcon = "wi-day-rain";
            break;
  
          default:
            whetherTypeIcon = "wi-day-sunny";
            break;
        }
      }


    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${whetherTypeIcon}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">weatherType</div>
                        <div className="place">
                            {name}, {country}
                        </div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            {timeStr} PM <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WhetherCard
