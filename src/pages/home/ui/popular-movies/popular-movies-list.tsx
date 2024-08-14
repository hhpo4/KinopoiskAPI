import { FC } from "react";

import { MovieCard, MoviesCardData, MovieCardData } from "../..";

import classes from "../styles.module.css";

interface PopularMoviesChainProps {
    chainName: string;
    moviesCardData: MoviesCardData;
}

const PopularMoviesList: FC<PopularMoviesChainProps> = ({ chainName, moviesCardData }) => {
    return (
        <>
            <h1 className="chainName"> {chainName}</h1>
            <div className={classes.moviesChain}>
                {
                    moviesCardData.map((movieCardData: MovieCardData) => (
                        <MovieCard
                            key={movieCardData.id}
                            movieCardData={movieCardData}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default PopularMoviesList;
