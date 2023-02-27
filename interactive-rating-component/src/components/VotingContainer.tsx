import { useContext } from 'react';
import { VotingContext } from '../contexts/VotingContext';
import VotingRatingButtons from './VotingRatingButtons';
import VotingSubmitButton from './VotingSubmitButton';

export default function VotingContainer() {

  const votingContext = useContext(VotingContext);
  
  if (votingContext?.hasVoted === false) {
    return (
      <div className="bg-gradient-to-b from-fe-gradient-light to-fe-gradient-dark w-[325px] sm:w-[400px] h-[400px] rounded-[30px] shadow-md p-10 flex flex-col justify-between">
        <div className="h-[45px] w-[45px] bg-fe-dark-blue shadow-md flex items-center justify-center rounded-full">
          <img src="/icon-star.svg" alt="Star icon" className='h-[18px] w-[18px]'/>
        </div>
        <h1 className="text-2xl text-fe-white font-bold tracking-[1px] mt-2">
          How did we do?
        </h1>
        <p className='text-[15px] text-fe-light-grey -mt-4'>
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>
        <VotingRatingButtons />
        <VotingSubmitButton />
      </div>
    )
  } else {
    return (
      <div className="bg-gradient-to-b from-fe-gradient-light to-fe-gradient-dark w-[325px] sm:w-[400px] h-[400px] rounded-[30px] shadow-md p-10 flex flex-col justify-between items-center">
      <div className="flex justify-center">
        <img src="illustration-thank-you.svg" alt="Star icon" className=''/>
      </div>
      <div className="text-[15px] h-9 w-52 text-center rounded-full bg-fe-dark-blue shadow-md flex items-end justify-center p-1.5">
        <p className="text-fe-orange">
          You selected {votingContext?.rating} out of 5
        </p>
      </div>
      <h1 className="text-2xl text-fe-white font-bold tracking-[1px] mt-2 text-center">
        Thank you!
      </h1>
      <p className='text-[15px] text-fe-light-grey -mt-4 text-center'>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
    </div>
    )
  }
 
}
