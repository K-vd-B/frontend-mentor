import { useContext } from 'react'
import { VotingContext } from '../contexts/VotingContext';

export default function VotingRatingButton({ number, selected }: { number: number, selected: boolean }) {    
  
    const votingContext = useContext(VotingContext);
    
    if (selected) {
        return (
          <button className="h-10 sm:h-12 w-10 sm:w-12 bg-fe-medium-grey shadow-md rounded-full 
                          hover:bg-fe-orange hover:text-fe-white transition-all text-fe-dark-blue" 
                          onClick={() => votingContext?.setRating(number)}>
            {number}
          </button>
        );
    } else {
        return (
          <button className="h-10 sm:h-12 w-10 sm:w-12 bg-fe-dark-blue shadow-md rounded-full 
                          hover:bg-fe-orange hover:text-fe-white transition-all text-fe-medium-grey" 
                          onClick={() => votingContext?.setRating(number)}>
            {number}
          </button>
        )
    }
}
