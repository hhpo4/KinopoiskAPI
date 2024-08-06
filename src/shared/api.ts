import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN = import.meta.env.VITE_API_KEY;

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.kinopoisk.dev/v1.4/movie",
        prepareHeaders: (headers) => {
            headers.set("X-API-KEY", TOKEN);
            headers.set("accept", "application/json");
            return headers;
        },
    }),
    endpoints: () => ({}),
});
