import { FC, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getMovieById } from "../../api";
import { MovieCardData } from "../../model/types";
import { MoviesContext } from "@/shared/context";
import Rating from "./rating";

import classes from "./movie-card.module.css";

interface MovieCardProps {
    movieCardData: MovieCardData;
}

const MovieCard: FC<MovieCardProps> = ({
    movieCardData: { id, rating, posterUrl, name },
}) => {
    const { setMovieDetails } = useContext(MoviesContext);
    const navigate = useNavigate();

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(false);
    };

    const handleMovieCardClick = async () => {
        const movieDetailsData = await getMovieById(id);
        setMovieDetails(movieDetailsData);
        navigate(`/${movieDetailsData.id}`);
    };

    return (
        <div className={classes.card} onClick={handleMovieCardClick}>
            <img
                src={posterUrl}
                alt={`Постер фильма ${name}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
            />
            {imageLoaded && !imageError && <Rating rating={rating} />}
        </div>
    );
};

export default MovieCard;
