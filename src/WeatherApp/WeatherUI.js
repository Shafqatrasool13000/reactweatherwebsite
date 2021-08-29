import React,{useState,useEffect} from 'react'

const WeatherUI = ({ temp,
    pressure,
    humidity,
    speed,
    weathermood,
    city,
    country,
    sunset, }) => {
  const [myWeatherMood, setMyWeatherMood] = useState("")
    //Dealing with weathermood
    useEffect(() => {
        if(weathermood)
        switch (weathermood) {
            case "Clouds":
                setMyWeatherMood("wi-night-cloudy")
                break;
                case 'Rain':
                    setMyWeatherMood("wi-night-alt-sleet")
                    break;
                    case 'Clear':
                    setMyWeatherMood("wi-night-clear")
                    break;
                    case 'Haze':
                    setMyWeatherMood("wi-day-haze")
                    break;
                    case 'Smoke':
                        setMyWeatherMood("wi-smoke")
                        break;
                        case 'Drizzle':
                    setMyWeatherMood("wi-raindrops")
                    break;
                    default:
                        setMyWeatherMood("wi-night-cloudy")
                        break;
                    }
                
                }, [weathermood])
    
  //Converting Second into Time
    let sec = sunset;
    //Convert to miliseconds
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`

    return (
        <>
            <article className='widget'>
                <div className="weatherIcon">
                <i className={`wi ${myWeatherMood}`}></i>
                <p>{`"${weathermood}"`}</p>
                </div>
                
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{`${city},${country}`}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                {/* 4 column section  */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p> <i className={"wi wi-sunset"}></i></p>

                            <p className="extra-info-leftside">
                                {timestr} PM <br />
                                SunSet
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p> <i className={"wi wi-humidity"}></i></p>

                            <p className="extra-info-leftside">
                                {humidity} <br />
                                humidity
                            </p>
                        </div>
                        <div className="two-sided-section">

                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p> <i className={"wi wi-rain"}></i></p>

                            <p className="extra-info-leftside">
                                {pressure} <br />
                                pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p> <i className={"wi wi-strong-wind"}></i></p>

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

export default WeatherUI
