import React from "react";
import SearchForm from "../components/search/SearchForm"

const MainPage = () => {
    return (
        <div>
            <h1>Welcome to my Weather App</h1>
            <h2>Search your location to begin.</h2>
            <SearchForm />
        </div>
    );
};

export default MainPage;
