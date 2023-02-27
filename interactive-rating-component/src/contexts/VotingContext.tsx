import React, { createContext, ReactNode, SetStateAction, useState } from 'react'

interface I_VotingContext {
    rating: number;
    setRating: React.Dispatch<SetStateAction<number>>;
    hasVoted: boolean;
    setHasVoted: React.Dispatch<SetStateAction<boolean>>;
    votingAlertMessage: string;
    setVotingAlertMessage: React.Dispatch<SetStateAction<string>>;
    handleVote: Function;
    handleVotingAlert: Function;
}

export const VotingContext = createContext<I_VotingContext | null>(null);

export default function VotingContextProvider({children}: {children: ReactNode | ReactNode[]}) {

    const [rating, setRating] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);
    const [votingAlertMessage, setVotingAlertMessage] = useState('');

    const handleVote = () => {
        if (rating === 0) {
            handleVotingAlert("Please select a rating.")
        } else {
            setHasVoted(true);
        }
    }

    const handleVotingAlert = (message: string) => {
        setVotingAlertMessage(message);
    
        setTimeout(() => {
            setVotingAlertMessage('');
        }, 3000);
      }
    
    return (
        <VotingContext.Provider value={{rating, setRating, hasVoted, setHasVoted, votingAlertMessage, 
                                        setVotingAlertMessage, handleVote, handleVotingAlert}}>
            {children}
        </VotingContext.Provider>
    )
}
