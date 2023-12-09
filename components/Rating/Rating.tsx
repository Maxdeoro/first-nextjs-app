import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from './Rating.module.css';

interface MyComponentProps {}

export const MyComponent: React.FC<MyComponentProps> = () => {
  const [rating, setRating] = useState<number>(0);

  // Catch Rating value
  const handleRating = (rate: number): void => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = (): void => console.log('Enter');
  const onPointerLeave = (): void => console.log('Leave');
  const onPointerMove = (value: number, index: number): void =>
    console.log(value, index);

  return (
    // <div className='App'>
    <div className={styles.starBlock}>
      <Rating
        onClick={handleRating}
        // onPointerEnter={onPointerEnter}
        // onPointerLeave={onPointerLeave}
        // onPointerMove={onPointerMove} 
        transition= {true} 
        allowFraction={true}
        size={23} 
        fillColor={'#8651cb'} 
        showTooltip={true} 
        tooltipStyle={{background: '#8651cb'}}
        /* Available Props */
      />
    </div>
  );
};