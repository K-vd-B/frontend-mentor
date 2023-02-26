import React from 'react'

export default function VotingSubmitButton({ onClick }: {onClick: any}) {
  return (
    <button className="bg-fe-orange shadow-md h-[44px] w-[100%] rounded-full text-fe-white text-[15px] tracking-[2px] font-bold hover:bg-fe-white hover:text-fe-orange transition-all flex justify-center items-end p-[9px]" onClick={() => onClick()}>
        SUBMIT
    </button>
  )
}
