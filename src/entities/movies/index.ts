import MovieCard from "./ui/movie-card/movie-card";
import {
    HomePageMovie,
    HomePageMovies,
    MovieCardData,
    MoviesCardData,
    MoviesSearchedByNameParams,
} from "./model/types";

import { getMoviesByName } from "./api";

/* ================================ */

export default MovieCard;
export { getMoviesByName };
export type {
    MoviesSearchedByNameParams,
    HomePageMovies,
    HomePageMovie,
    MovieCardData,
    MoviesCardData,
};
