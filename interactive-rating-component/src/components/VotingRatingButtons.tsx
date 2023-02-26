import React, { Dispatch, SetStateAction } from 'react';
import VotingRatingButton from './VotingRatingButton';

export default function ({ rating, onClick } : { rating: number, onClick: Dispatch<SetStateAction<number>> }) {

    const possibleRatings = [1, 2, 3, 4, 5];

    const ratingButtons = possibleRatings.map(possibleRating => {
        if (possibleRating === rating) {
            return <VotingRatingButton key={possibleRating} number={possibleRating} selected={true} onClick={onClick}/>
        } else {
            return <VotingRatingButton key={possibleRating} number={possibleRating} selected={false} onClick={onClick}/>
        }              
    });

    return (
      <div className="flex justify-between">
        {ratingButtons} 
      </div>
    )
}
