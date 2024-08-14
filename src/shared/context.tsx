import { PopularMoviesData } from "@/entities/movies/model/types";
import { ReactNode, createContext, useState, Dispatch } from "react";

export interface IMoviesContext {
    homePageMovies: PopularMoviesData;
    setHomePageMovies: Dispatch<React.SetStateAction<PopularMoviesData>>;
}

export const MoviesContext = createContext<IMoviesContext>({
    homePageMovies: [],
    setHomePageMovies: () => {},
});

export interface MoviesProviderProps {
    children: ReactNode;
}

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
    const [homePageMovies, setHomePageMovies] = useState<PopularMoviesData>([]);

    return (
        <MoviesContext.Provider value={{ homePageMovies, setHomePageMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};
