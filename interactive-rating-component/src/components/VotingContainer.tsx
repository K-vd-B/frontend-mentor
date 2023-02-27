import { useContext } from 'react';
import { VotingContext } from '../contexts/VotingContext';
import VotingPending from './VotingPending';
import VotingSuccesful from './VotingSuccesful';

export default function VotingContainer() {

  const votingContext = useContext(VotingContext);
  
  return (
    <div className={`bg-gradient-to-b from-fe-gradient-light to-fe-gradient-dark w-[325px] 
                   sm:w-[400px] h-[400px] rounded-[30px] shadow-md p-10 flex flex-col 
                   justify-between ${votingContext?.hasVoted && `items-center`}`}>
        {votingContext?.hasVoted ? <VotingSuccesful /> : <VotingPending />}
    </div>
  )
}