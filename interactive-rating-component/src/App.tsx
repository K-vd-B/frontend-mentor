import { useContext } from "react";
import VotingContainer from "./components/VotingContainer";
import AlertContainer from "./components/AlertContainer";
import { VotingContext } from "./contexts/VotingContext";

export default function App() {

    const votingContext = useContext(VotingContext);
    
    return (
        <div className="min-h-screen min-w-screen bg-fe-very-dark-blue flex justify-center 
                        items-center">
          <VotingContainer />
          {votingContext?.votingAlertMessage && <AlertContainer />}
        </div>
    )
}