import { baseApi } from "@/shared/api";
import {
    MovieSearchedDefault,
    MoviesSearchedDefault,
    MoviesSearchedByName,
} from "@/shared/types";
import { MoviesSearchedDefaultParams } from "../model/types";

export const moviesApi = baseApi.injectEndpoints({
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
