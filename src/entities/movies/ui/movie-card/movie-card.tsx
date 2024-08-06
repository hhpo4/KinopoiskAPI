import { FC, useState } from "react";
import classNames from "classnames";

import classes from "./movie-card.module.css";

interface MovieCardProps {
    rating: number;
}

const MovieCard: FC<MovieCardProps> = ({ rating }) => {
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
                        src="https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000"
                        alt="Описание изображения"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                </div>
                {imageLoaded && !imageError && (
                    <div className={styles}>{rating.toFixed(1)}</div>
                )}
                <h1 className={classes.name}>Movie name</h1>
            </div>
    );
};

export default MovieCard;
