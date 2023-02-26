import React from 'react'

export default function AlertContainer({ message }: { message: string }) {
  return (
    <div className="h-9 w-48 fixed bottom-8 bg-warning-red shadow-md rounded-full text-center p-2 transition-all animate-bounce">
        <p className="text-fe-white text-[15px]">{message}</p>
    </div>
  )
}
