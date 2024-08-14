import axios, { AxiosError } from "axios";

import { MoviesSearchedDefaultParams } from "../model/types";
import { HomePageMovies } from "../model/types";

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

export const getHomePageMovies = async (
    params: MoviesSearchedDefaultParams
): Promise<HomePageMovies> => {
    try {
        const response = await instance.get("", {
            headers: {
                "X-API-KEY": TOKEN,
                accept: "application/json",
            },
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

export const getMoviesByName = async ({ query = "", page = 1, limit = 10 }) => {
    try {
        const response = await instance.get("/search", {
            params: {
                query,
                page,
                limit,
            },
        });
    
        return response.data
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
