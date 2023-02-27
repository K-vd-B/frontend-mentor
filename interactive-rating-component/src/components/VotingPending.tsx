import React from 'react'
import VotingRatingButtons from './VotingRatingButtons'
import VotingSubmitButton from './VotingSubmitButton'

export default function VotingPending() {
  return (
    <>
        <div className="h-[45px] w-[45px] bg-fe-dark-blue shadow-md flex items-center 
                       justify-center rounded-full">
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
    </>
  )
}
