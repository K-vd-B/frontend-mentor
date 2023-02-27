import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import VotingContextProvider from './contexts/VotingContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VotingContextProvider>
      <App />
    </VotingContextProvider>
  </React.StrictMode>,
)
