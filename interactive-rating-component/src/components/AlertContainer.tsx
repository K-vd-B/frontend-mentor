import { useContext } from 'react'
import { VotingContext } from '../contexts/VotingContext';

export default function AlertContainer() {

  const votingContext = useContext(VotingContext);
  
  return (
    <div className="h-9 w-48 fixed bottom-8 bg-warning-red shadow-md rounded-full text-center p-2 
                    transition-all animate-bounce">
        <p className="text-fe-white text-[14px]">
          {votingContext?.votingAlertMessage}
        </p>
    </div>
  )
}
