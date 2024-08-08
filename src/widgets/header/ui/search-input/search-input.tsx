import { FC, InputHTMLAttributes, useState } from "react";
import classes from "./search-input.module.css";
import { useGetMoviesByNameQuery } from "@/entities/movies/api";

const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const { data } = useGetMoviesByNameQuery({
        query: "1+1",
    });

    console.log(data);
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setSearchQuery(inputValue);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <input
            type="text"
            {...props}
            className={classes.MyInput}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    );
};

export default SearchInput;
