import React, { useState } from "react";
import VotingContainer from "./components/VotingContainer";
import AlertContainer from "./components/AlertContainer";

function App() {

  const[alertMessage, setAlertMessage] = useState('');

  const handleAlert = (message: string) => {
    setAlertMessage(message);

    setTimeout(() => {
      setAlertMessage('');
    }, 5000);
  }

  return (
    <div className="min-h-screen min-w-screen bg-fe-very-dark-blue flex justify-center items-center">
      <VotingContainer handleAlert={handleAlert}/>
      {alertMessage && <AlertContainer message={alertMessage}/>}
    </div>

  )
}

export default App
