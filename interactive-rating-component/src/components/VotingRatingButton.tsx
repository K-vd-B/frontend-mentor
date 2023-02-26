import React, { SetStateAction } from 'react'

export default function VotingRatingButton({ number, selected, onClick }: { number: number, selected: boolean, onClick: React.Dispatch<SetStateAction<number>>}) {    
  
    if (selected) {
        return (
          <button className="h-12 w-12 bg-fe-medium-grey shadow-md rounded-full hover:bg-fe-orange hover:text-fe-white transition-all text-fe-dark-blue" onClick={() => onClick(number)}>
            {number}
          </button>
        );
    } else {
        return (
          <button className="h-12 w-12 bg-fe-dark-blue shadow-md rounded-full hover:bg-fe-orange hover:text-fe-white transition-all text-fe-medium-grey" onClick={() => onClick(number)}>
            {number}
          </button>
        )
    }
}
