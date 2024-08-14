import { MoviesChainParams } from "./types";

export const HOME_PAGE_CONTENT_CATEGORIES: MoviesChainParams[] = [
    {
        chainName: "Боевики",
        moviesParams: {
            type: "movie",
            isSeries: false,
            year: "2023-2024",
            "rating.kp": "7.2-10",
            "genres.name": "фантастика",
        },
    },
    // {
    //     chainName: "Триллеры",
    //     moviesParams: {
    //         type: "movie",
    //         isSeries: false,
    //         year: "2023-2024",
    //         "rating.kp": "7.2-10",
    //         "genres.name": "триллер",
    //     },
    // },
    // {
    //     chainName: "Ужасы",
    //     moviesParams: {
    //         type: "movie",
    //         isSeries: false,
    //         year: "2023-2024",
    //         "rating.kp": "7.2-10",
    //         "genres.name": "драма",
    //     },
    // },
    // {
    //     chainName: "Популярные сериалы",
    //     moviesParams: {
    //         type: "tv-series",
    //         isSeries: true,
    //         year: "2023-2024",
    //         "rating.kp": "7.2-10",
    //     },
    // },
]
