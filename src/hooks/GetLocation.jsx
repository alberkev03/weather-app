import { useState, useEffect } from "react";

const useGetLocation = () => {
    const [userInput, setUserInput] = useState("cupertino");
    const [city, setCity] = useState({ name: "", country: "" });
    const [coords, setCoords] = useState({ lat: null, lon: null });

    useEffect(() => {
        fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${userInput}&count=10&language=en&format=json`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    const { name, country, latitude, longitude } =
                        data.results[0];
                    setCity({ name, country });
                    setCoords({ lat: latitude, lon: longitude });
                } else {
                    setCity({ name: "not found", country: "" });
                }
            });
    },[userInput]);
    return { userInput, setUserInput, city, coords };
};

export default useGetLocation;
