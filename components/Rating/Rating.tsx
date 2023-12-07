import { RatingProps } from "./Rating.props";
import { useState, useEffect } from "react";
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = ({isEditable=false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {
    const [ratingArray,setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

        useEffect(() => {
            constructRating(rating);
        }, [rating]);

        const constructRating = (currentRating: number) => {
            const updatedArray = ratingArray.map((rat: JSX.Element, arrayIndex: number) => {
                return (
                    <StarIcon key={arrayIndex} className={cn(styles.star, {
                        [styles.fill]: arrayIndex < currentRating,
                    })}/>
                );
            });
            setRatingArray(updatedArray);
        };

        return (
            <div {...props}>
            {ratingArray.map((rat: JSX.Element, arrayIndex: number) => (
                <span key={arrayIndex}>{rat}</span>
            ))}
        </div>
        );

};