import { useEffect, useState } from "react";
import { fetchWeatherData } from "../API-requests/CurrentWeather-API"
import { fetchForcastWeatherData } from "../API-requests/ForcastWeather-API";

export const WeatherForcast = () => {

    fetchForcastWeatherData();

    return(
        <div className="widget">
        </div>
    )
}