
import Search from "./Search.jsx";
const Navbar = () => {
    return (
        <div id="navbar">
            <nav>
                <div id="left">
                    <h3>Weather for </h3>
                </div>
                <div id="right">
                    <form>
                        <Search />
                        <button type="submit">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
