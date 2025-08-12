import useGetLocation from "../hooks/GetLocation";
import useGetWeather from "../hooks/GetWeather";
const GetForecast = () => {
    const { city } = useGetLocation();
    const {
        currentWeather,
        currentFeelsLike,
        currentHumidity,
        currentRain,
        currentWindSpeed,
        currentWindDirection,
        hourlyTime,
        hourlyTemperature,
        hourlyRain,
    } = useGetWeather();
    return (
        <>
            <h1>
                Weather for {city.name}, {city.country}
            </h1>
            <div id="actual-weather">
                <h2>Current Temperature: {currentWeather}°C</h2>
                <h3>Feels Like: {currentFeelsLike}°C</h3>
                <h3>Humidity: {currentHumidity}%</h3>
                <h3>Rain: {currentRain}mm</h3>
                <h3>Wind Speed: {currentWindSpeed}km/h</h3>
                <h3>Wind Direction: {currentWindDirection}°</h3>
            </div>
        </>
    );
};

export default GetForecast;
