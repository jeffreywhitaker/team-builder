import React, {useState} from 'react';
import './App.css';
import data from './Data';

function App() {
  const [team, setTeam] = useState(data);


  return (
    <div>
      <h1>Something here.</h1>
    </div>
  )
}

export default App;
