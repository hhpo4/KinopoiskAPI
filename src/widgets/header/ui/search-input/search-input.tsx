import { FC, InputHTMLAttributes, useState, useEffect, useRef } from "react";
import { debounce } from "lodash";

import { getMoviesByName } from "@/entities/movies";
import { MoviesSearchedByNameParams } from "@/entities/movies";

import classes from "./search-input.module.css";

const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const [searchedParams, setSearchedParams] =
        useState<MoviesSearchedByNameParams>({
            query: "",
        });

    const debouncedGetMoviesByName = useRef(
        debounce((params: MoviesSearchedByNameParams) => {
            getMoviesByName(params);
        }, 500)
    ).current;

    useEffect(() => {
        if (searchedParams.query) {
            debouncedGetMoviesByName(searchedParams);
        }

        return () => {
            debouncedGetMoviesByName.cancel();
        };
    }, [searchedParams.query]);

    return (
        <input
            type="text"
            {...props}
            className={classes.MyInput}
            value={searchedParams.query}
            onChange={(e) => setSearchedParams({ query: e.target.value })}
        />
    );
};

export default SearchInput;
