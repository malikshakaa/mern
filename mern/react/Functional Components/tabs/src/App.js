import './App.css';
import React, { useState } from 'react';
import Show from './components/Show';
import Tabs from './components/Tabs';


function App() {
  const [currentMsg, setCurrentMsg] = useState("");
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
}
  return (
    <div className="App">
      <Tabs newMessage={ youveGotMail }/>
      <hr/>
      <Show message={currentMsg}/>
    </div>
  );
}

export default App;