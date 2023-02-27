import { useContext } from 'react';
import { VotingContext } from '../contexts/VotingContext';
import VotingRatingButton from './VotingRatingButton';


export default function () {

    const votingContext = useContext(VotingContext);

    const possibleRatings = [1, 2, 3, 4, 5];

    const ratingButtons = possibleRatings.map(possibleRating => {
        if (possibleRating === votingContext?.rating) {
            return <VotingRatingButton key={possibleRating} number={possibleRating} selected={true} />
        } else {
            return <VotingRatingButton key={possibleRating} number={possibleRating} selected={false} />
        }              
    });

    return (
      <div className="flex justify-between">
        {ratingButtons} 
      </div>
    )
}