export const fetchForcastWeatherData = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=fe8cc7ce1859439baab125140241806&q=Utrecht&days=3');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const ForcastData = await response.json();
    console.log(ForcastData);
    return ForcastData;
};