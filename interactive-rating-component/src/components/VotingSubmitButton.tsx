import { useContext } from 'react'
import { VotingContext } from '../contexts/VotingContext';

export default function VotingSubmitButton() {

  const votingContext = useContext(VotingContext);
  
  return (
    <button className="bg-fe-orange shadow-md h-[44px] w-[100%] rounded-full text-fe-white 
                       text-[15px] tracking-[2px] font-bold hover:bg-fe-white hover:text-fe-orange 
                       transition-all flex justify-center items-end p-[9px]" 
                       onClick={() => votingContext?.handleVote()}>
        SUBMIT
    </button>
  )
}
