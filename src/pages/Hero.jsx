import React from "react";
import Search from "../components/Search";

const MainPage = () => {
    return (
        <div>
            <h1>Welcome to my Weather App</h1>
            <h2>Search your location to begin.</h2>
            <form>
                <Search />
                <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
            </form>
        </div>
    );
};

export default MainPage;
