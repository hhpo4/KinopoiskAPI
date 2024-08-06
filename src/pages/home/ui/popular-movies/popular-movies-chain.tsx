import { FC } from "react";

import MovieCard from "@/entities/movies/ui/movie-card/movie-card";

import classes from "./popular-movies-chain.module.css";

interface PopularMoviesChainProps {
    chainName: string;
}

const PopularMoviesChain: FC<PopularMoviesChainProps> = ({ chainName }) => {
    return (
        <>
            <h1 className="chainName"> {chainName}</h1>
            <div className={classes.moviesChain}>
                <MovieCard rating={10} />
                <MovieCard rating={8} />
                <MovieCard rating={7} />
                <MovieCard rating={5} />
                <MovieCard rating={4} />
                <MovieCard rating={4} />
                <MovieCard rating={4} />
            </div>
        </>
    );
};

export default PopularMoviesChain;
