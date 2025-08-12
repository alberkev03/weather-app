import SearchForm from "./search/SearchForm";
const Navbar = () => {
    return (
        <div id="navbar">
            <nav>
                <div id="left">
                    <h3>Weather for </h3>
                </div>
                <div id="right">
                    <SearchForm />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
