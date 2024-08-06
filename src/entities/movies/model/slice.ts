import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
    MovieSearchedDefault,
    MoviesSearchedByName,
    MoviesSearchedDefault,
} from "./types";

export interface MovieState {
    PopularMovies: MoviesSearchedDefault | [];
    SearchedMovies: MoviesSearchedByName | [];
    MoviById: MovieSearchedDefault | null;
}

const initialState: MovieState = {
    PopularMovies: [],
    SearchedMovies: [],
    MoviById: null,
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setPopularMovies: (
            state,
            action: PayloadAction<MoviesSearchedDefault>
        ) => {
            state.PopularMovies = action.payload;
        },
        setSearchedMovies: (
            state,
            action: PayloadAction<MoviesSearchedByName>
        ) => {
            state.SearchedMovies = action.payload;
        },
        setMoviById: (state, action: PayloadAction<MovieSearchedDefault>) => {
            state.MoviById = action.payload;
        },
    },
});

export const { setPopularMovies, setSearchedMovies, setMoviById } =
    moviesSlice.actions;

export default moviesSlice.reducer;
