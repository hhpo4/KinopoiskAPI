import { FC, useContext } from "react";

import {
    MoviesContext,
    PopularMovieData,
    HomePageMovie,
    MoviesCardData,
} from "../../";
import PopularMoviesList from "./popular-movies-list";

import classes from "../styles.module.css";

const PopularMovies: FC = () => {
    const { homePageMovies } = useContext(MoviesContext);

    if (!homePageMovies || homePageMovies.length === 0) {
        return <div>No movies available</div>;
    }

    return (
        <div className={classes.wrapper}>
            {homePageMovies.map((movie: PopularMovieData) => {
                const currentListMoviesCardsData: MoviesCardData =
                    movie.movies.map((movieCardData: HomePageMovie) => ({
                        id: movieCardData.id,
                        name: movieCardData.name,
                        rating: movieCardData.rating.kp,
                        posterUrl:
                            movieCardData.poster.previewUrl !== null
                                ? movieCardData.poster.previewUrl
                                : movieCardData.poster.url,
                    }));

                return (
                    <PopularMoviesList
                        key={movie.moviesChainParams.chainName}
                        chainName={movie.moviesChainParams.chainName}
                        moviesCardData={currentListMoviesCardsData}
                    />
                );
            })}
        </div>
    );
};

export default PopularMovies;
