import { FC } from "react";

import PopularMoviesChain from "./popular-movies-chain";

import classes from "./popular-movies.module.css";

interface PopularMoviesProps {}

const PopularMovies: FC<PopularMoviesProps> = () => {
    return (
        <div className={classes.wrapper}>
            <PopularMoviesChain chainName="Боевики" />
            <PopularMoviesChain chainName="Триллеры" />
            <PopularMoviesChain chainName="Триллеры" />
        </div>
    );
};

export default PopularMovies;
