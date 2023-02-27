import { useContext } from 'react'
import { VotingContext } from '../contexts/VotingContext';

export default function VotingSuccesful() {

  const votingContext = useContext(VotingContext);
  
  return (
    <>
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
    </>
  )
}
