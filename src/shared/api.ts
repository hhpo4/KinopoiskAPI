import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    MovieSearchedDefault,
    MoviesSearchedDefault,
    MoviesSearchedByName,
} from "./types";

export const TOKEN = "NK941PK-55JMHFQ-PBP1QX3-Q7D0C3F";

export const baseApi = createApi({
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
            {
                type: string;
                isSeries: boolean;
                year: number;
                ratingKp: string;
                page?: number;
                limit?: number;
            }
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
        }),
        getMoviesByName: builder.query<
            MoviesSearchedByName,
            { query: string; page?: number; limit?: number }
        >({
            query: (params) => {
                const { query, page = 1, limit = 10 } = params;

                if (page <= 0) {
                    throw new Error("Page must be a positive integer");
                }
                if (limit <= 0) {
                    throw new Error("Limit must be a positive integer");
                }

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

export const { useGetMoviesByNameQuery, useGetMovieByIdQuery } = baseApi;
