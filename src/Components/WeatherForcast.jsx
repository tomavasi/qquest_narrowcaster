import { useEffect, useState } from "react";
import { fetchWeatherData } from "../API-requests/CurrentWeather-API"
import { fetchForcastWeatherData } from "../API-requests/ForcastWeather-API";

export const WeatherForcast = () => {
    const [forcastOne, setForcastOne] = useState({
        weekday: '',
        icon: '',
        temp: ''
    });

    const [forcastTwo, setForcastTwo] = useState({
        weekday: '',
        icon: '',
        temp: ''
    });

    const [forcastThree, setForcastThree] = useState({
        weekday: '',
        icon: '',
        temp: ''
    });

    useEffect(() => {
        const getForecastData = async () => {
            const forcastData = await fetchForcastWeatherData();
            if(forcastData) {
                setForcastOne((prevState) => ({
                    ...prevState,
                    icon: forcastData.forecast.forecastday[0].day.condition[1],
                    temp: forcastData.forecast.forecastday[0].day.avgtemp_c.toString() + '°C'
                }))
            }
        }
        getForecastData();
    }, []);


    return(
        <div className="widget">
            <img src={forcastOne.icon}></img>
        </div>
    )
}