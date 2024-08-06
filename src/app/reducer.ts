import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from "@/entities/movies";
import { baseApi } from "@/shared/api";


export const rootReducer = combineReducers({
    movies: moviesReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});
