import useGetLocation from "./GetLocation";
import { useState, useEffect } from "react";

const useGetWeather = () => {
    const { city } = useGetLocation();
    const [currentWeather, setCurrentWeather] = useState(null);
    const [currentFeelsLike, setCurrentFeelsLike] = useState(null);
    const [currentHumidity, setCurrentHumidity] = useState(null);
    const [currentRain, setCurrentRain] = useState(null);
    const [currentWindSpeed, setCurrentWindSpeed] = useState(null);
    const [currentWindDirection, setCurrentWindDirection] = useState(null);

    const [hourlyTime, setHourlyTime] = useState([]);
    const [hourlyTemperature, setHourlyTemperature] = useState([]);
    const [hourlyRain, setHourlyRain] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&hourly=temperature_2m,precipitation_probability&current=temperature_2m,relative_humidity_2m,precipitation,wind_direction_10m,wind_speed_10m,apparent_temperature`
        )
            .then((response) => response.json())
            .then((data) => {
                setCurrentWeather(data.current.temperature_2m);
                setCurrentFeelsLike(data.current.apparent_temperature);
                setCurrentHumidity(data.current.relative_humidity_2m);
                setCurrentRain(data.current.precipitation);
                setCurrentWindSpeed(data.current.wind_speed_10m);
                setCurrentWindDirection(data.current.wind_direction_10m);

                setHourlyTime(data.hourly.time);
                setHourlyTemperature(data.hourly.temperature_2m);
                setHourlyRain(data.hourly.precipitation_probability);
            })
            .catch((err) => console.log(err));
    }, [city.lat, city.lon]);

    return {
        currentWeather,
        currentFeelsLike,
        currentHumidity,
        currentRain,
        currentWindSpeed,
        currentWindDirection,

        hourlyTime,
        hourlyTemperature,
        hourlyRain,
    };
};

export default useGetWeather;
