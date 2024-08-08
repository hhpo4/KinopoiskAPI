import {
    MovieSearchedDefault,
    MoviesSearchedDefault,
    MoviesSearchedByName,
} from "@/shared/types";
import { MoviesSearchedDefaultParams } from "../model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN = import.meta.env.VITE_API_KEY;

export const moviesApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.kinopoisk.dev/v1.4/movie",
        prepareHeaders: (headers) => {
            headers.set("X-API-KEY", TOKEN);
            headers.set("accept", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query<
            MoviesSearchedDefault,
            MoviesSearchedDefaultParams
        >({
            query: (params) => {
                const {
                    page = 1,
                    limit = 10,
                    type,
                    isSeries,
                    year,
                    ratingKp,
                } = params;

                return `?${encodeURIComponent(
                    `page=${page}&limit=${limit}&type=${type}&isSeries=${isSeries}&year=${year}&rating.kp= ${ratingKp}`
                )}`;
            },
            transformResponse: (res: unknown) => res as MoviesSearchedDefault,
        }),
        getMoviesByName: builder.query<
            MoviesSearchedByName,
            { query: string; page?: number; limit?: number }
        >({
            query: (params) => {
                const { query, page = 1, limit = 10 } = params;

                return `/search?query=${encodeURIComponent(
                    query
                )}&page=${page}&limit=${limit}`;
            },

        }),
        getMovieById: builder.query<MovieSearchedDefault, string>({
            query: (movieId) => `/${movieId}`,
        }),
    }),
});

export const {
    useGetMoviesByNameQuery,
    useGetMovieByIdQuery,
    useGetPopularMoviesQuery,
} = moviesApi;
