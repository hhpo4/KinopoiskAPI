import axios, { AxiosError } from "axios";

import {
    MoviesSearchedDefaultParams,
    MovieSearchedDefault,
    HomePageMovies,
    MoviesSearchedByNameParams,
} from "../model/types";

const TOKEN = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-API-KEY": TOKEN,
        accept: "application/json",
    },
    params: {
        page: 1,
        limit: 10,
    },
});

export const getMovieById = async (
    movieId: number
): Promise<MovieSearchedDefault> => {
    try {
        const response = await instance.get(`/${movieId}`);

        return response.data;
    } catch (error) {
        const errorMessage = error instanceof AxiosError 
            ? `Ошибка API: ${error.message} - ${error.response?.data}`
            : `Неизвестная ошибка: ${error}`;
        
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
};

export const getHomePageMovies = async (
    params: MoviesSearchedDefaultParams
): Promise<HomePageMovies> => {
    try {
        const response = await instance.get("", {
            params: {
                ...instance.defaults.params,
                ...params,
            },
        });

        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Ошибка API:", error.message, error.response?.data);
            throw new Error(`Ошибка API: ${error.message}`);
        } else {
            console.error("Неизвестная ошибка:", error);
            throw new Error(`Неизвестная ошибка: ${error}`);
        }
    }
};

export const getMoviesByName = async ( params: MoviesSearchedByNameParams ) => {
    try {
        const response = await instance.get("/search", {
            params: {
                ...instance.defaults.params,
                ...params,            
            },
        });

        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Ошибка API:", error.message, error.response?.data);
            throw new Error(`Ошибка API: ${error.message}`);
        } else {
            console.error("Неизвестная ошибка:", error);
            throw new Error(`Неизвестная ошибка: ${error}`);
        }
    }
};
