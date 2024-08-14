import { FC, useState } from "react";
import classNames from "classnames";

import { MovieCardData } from "../../model/types";

import classes from "./movie-card.module.css";

interface MovieCardProps {
    movieCardData: MovieCardData;
}

const MovieCard: FC<MovieCardProps> = ({
    movieCardData: { id, rating, posterUrl },
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const styles = classNames({
        [classes.rating]: true,
        [classes.lessThan10]: rating <= 10 && rating >= 8,
        [classes.lessThan8]: rating < 8 && rating >= 7,
        [classes.lessThan7]: rating < 7 && rating > 5,
        [classes.lessThan5]: rating < 5,
    });

    const handleImageLoad = () => {
        setImageLoaded(true);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(false);
    };

    return (
        <div className={classes.card}>
            <div className={classes.imgWrapper}>
                <img
                    src={posterUrl}
                    alt="Описание изображения"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
            </div>
            {imageLoaded && !imageError && (
                <div className={styles}>{rating.toFixed(1)}</div>
            )}
        </div>
    );
};

export default MovieCard;
