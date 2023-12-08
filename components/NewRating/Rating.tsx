import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import styles from './Rating.module.css';

interface RatingProps {
  rating: number;
  changeRating?: void;
}

class Rating extends Component<{}, RatingProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  changeRating = (newRating: number, name: string) => {
    this.setState({
      rating: newRating
    });
  }

  render() {
    return (
        <div className={styles.starBlock}>
            <StarRatings
                rating={this.state.rating}
                starRatedColor="#8651cb"
                changeRating={this.changeRating}
                numberOfStars={5}
                name='rating' 
                starDimension='30px' 
                starSpacing='3px' 
            />
      </div>
    );
  }
}

export default Rating;