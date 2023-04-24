import { useState,createContext } from 'react';
import Page from './components/Page.jsx';
import './App.css';

export const UserStatus= createContext(null);

function App() {
  const[signedIn, setsignedIn] = useState(false);

  return (
    <>
    <UserStatus.Provider value={[signedIn,setsignedIn]}>
        <h1>{signedIn ? 
        "click below to Sign Out" :
        "Click below to Please Sign In" }</h1>
        <Page />
    </UserStatus.Provider>
    </>
  );
}

export default App;
