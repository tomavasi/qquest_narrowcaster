export const fetchWeatherData = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=fe8cc7ce1859439baab125140241806&q=Utrecht');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data);
    return data;
};