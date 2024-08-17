import { FC } from 'react';
import classNames from 'classnames';
import classes from "./movie-card.module.css";

interface RatingProps {
    rating: number;
}

const Rating: FC<RatingProps> = ({ rating }) => {
    const styles = classNames({
        [classes.rating]: true,
        [classes.lessThan10]: rating <= 10 && rating >= 8,
        [classes.lessThan8]: rating < 8 && rating >= 7,
        [classes.lessThan7]: rating < 7 && rating > 5,
        [classes.lessThan5]: rating < 5,
    });
    
    return <div className={styles}>{rating.toFixed(1)}</div>;
};

export default Rating;