import { PopularMoviesData } from "@/entities/movies/model/types";
import { ReactNode, createContext, useState, Dispatch, FC } from "react";

import { MovieSearchedDefault } from "@/entities/movies/model/types";

export interface IMoviesContext {
    homePageMovies: PopularMoviesData | null;
    setHomePageMovies: Dispatch<React.SetStateAction<PopularMoviesData | null>>;
    movieDetails: MovieSearchedDefault | null;
    setMovieDetails: Dispatch<
        React.SetStateAction<MovieSearchedDefault | null>
    >;
}

export const MoviesContext = createContext<IMoviesContext>({
    homePageMovies: null,
    setHomePageMovies: () => {},
    movieDetails: null,
    setMovieDetails: () => {},
});

export interface MoviesProviderProps {
    children: ReactNode;
}

export const MoviesProvider: FC<MoviesProviderProps> = ({ children }) => {
    const [homePageMovies, setHomePageMovies] =
        useState<PopularMoviesData | null>(null);
    const [movieDetails, setMovieDetails] =
        useState<MovieSearchedDefault | null>(null);

    return (
        <MoviesContext.Provider
            value={{
                homePageMovies,
                setHomePageMovies,
                movieDetails,
                setMovieDetails,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};
