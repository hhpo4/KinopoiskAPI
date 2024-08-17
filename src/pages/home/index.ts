import HomePage from "./ui/page";
import { MoviesContext } from "@/shared/context";
import {
    MoviesChainParams,
    PopularMovieData,
} from "@/entities/movies/model/types";
import { HOME_PAGE_CONTENT_CATEGORIES } from "@/entities/movies/model/constants";
import { getHomePageMovies } from "@/entities/movies/api";
import MovieCard from "@/entities/movies/ui/movie-card/movie-card";
import { HomePageMovie } from "@/entities/movies";
import { MoviesCardData, MovieCardData } from "@/entities/movies";

/* ================================ */

export {
    type MoviesChainParams,
    type PopularMovieData,
    type HomePageMovie,
    type MoviesCardData,
    type MovieCardData,
    MoviesContext,
    HOME_PAGE_CONTENT_CATEGORIES,
    getHomePageMovies,
    MovieCard,
};

/* ================================ */

export default HomePage;
