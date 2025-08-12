import { useState, useEffect } from "react";

const useGetLocation = () => {
    const [userInput, setUserInput] = useState("london");
    const [city, setCity] = useState({
        name: "",
        country: "",
        lat: null,
        lon: null,
    });

    useEffect(() => {
        fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${userInput}&count=10&language=en&format=json`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    const { name, country, latitude, longitude } =
                        data.results[0];
                    setCity({ name, country, lat: latitude, lon: longitude });
                } else {
                    setCity({ name: "not found"});
                }
            });
    }, [userInput]);

    return { userInput, setUserInput, city };
};

export default useGetLocation;
