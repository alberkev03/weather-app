import Search from "./SearchInput";
import FormButton from "./FormButton";
import useGetLocation from "../../hooks/GetLocation";
import { useEffect } from "react";
const SearchForm = () => {
    const { userInput, setUserInput } = useGetLocation();
    const changeInput = (e) => {
        e.preventDefault();
        setUserInput(e.target.search.value);
    };
    return (
        <>
            <form onSubmit={(e) => changeInput(e)}>
                <Search />
                <FormButton />
            </form>
        </>
    );
};

export default SearchForm;
