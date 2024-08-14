import { FC, useContext, useEffect } from "react";

import {
    MoviesChainParams,
    MoviesContext,
    HOME_PAGE_CONTENT_CATEGORIES,
    getHomePageMovies,
} from "../";

import PopularMovies from "./popular-movies/popular-movies";

const HomePage: FC = () => {
    const { setHomePageMovies } = useContext(MoviesContext);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await Promise.all(
                HOME_PAGE_CONTENT_CATEGORIES.map(
                    async (category: MoviesChainParams) => {
                        const response = await getHomePageMovies(
                            category.moviesParams
                        );
                        return {
                            moviesChainParams: {
                                chainName: category.chainName,
                                moviesParams: category.moviesParams,
                            },
                            movies: response.docs,
                        };
                    }
                )
            );

            setHomePageMovies(moviesData);
        };

        fetchMovies();
    }, []);

    return <PopularMovies />;
};

export default HomePage;
