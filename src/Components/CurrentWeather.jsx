import { useState, useEffect } from "react";
import { fetchWeatherData } from "../API-requests/CurrentWeather-API";
import './CurrentWeather.css'

// font voor datum moet nog worden aan gepast naar een lighter font en de groote van de dag van week moet nog aangepast

export const CurrentWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [currentTemp, setCurrentTemp] = useState('');
    const [weatherIcon, setWeatherIcon] = useState(null);

    const daysOfWeek = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const monthsOfYear = ["Januari", "Februari", "Maart", "April", "Mei", "Juni","Juli", "Augustus", "September", "Oktober", "November", "December"];

    const today = new Date();
    const currentDay = daysOfWeek[today.getDay()];
    const currentDate = today.getDate().toString() + ' ' + monthsOfYear[today.getMonth()];

    useEffect(() => {
        fetchWeatherData()
            .then(weatherData => {
                setWeatherData(weatherData);
                setCurrentTemp(weatherData.current.temp_c.toString().slice(0, 2) + '°C');
                setWeatherIcon(weatherData.current.condition.icon);
            })
            .catch(error => {
                console.error('Error fetching weather data from weather API', error);
            });
    }, []);

    const getBackGroundImg = () => {
        if (!weatherData) return '';
        const condition = weatherData.current.condition.text.toLowerCase();

        if (condition.includes('sunny') || condition.includes('clear')) {
            return 'url(./../assets/Images/images/sunny.jpg)';
        } else if (condition.includes('rain') || condition.includes('drizzle')) {
            return 'url(./../assets/Images/images/rainy.jpg)';
        } else if (condition.includes('snow')) {
            return 'url(./../assets/Images/images/snowy.jpg)';
        } else {
            return 'url(./../src/assets/Images/cloudy.jpg)';
        }
    };

    const widgetStyle = {
        backgroundImage: getBackGroundImg(),
        backgroundSize: 'cover'
    }

    return(
        <div id="currentWeatherWidget" className="widget" style={widgetStyle}>
            <p id="dayOfWeekCurWeather">{currentDay}</p>
            <img id="iconCurWeather" src={weatherIcon} />
            <p id="dateCurWeather">{currentDate}</p>
            <p id="tempCurWeather">{currentTemp}</p>
        </div>
    )
}