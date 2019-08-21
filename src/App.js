import React, {useState} from 'react';
import './App.css';
import data from './Data';

import Form from './Components/Form'

function App() {
  const [team, setTeam] = useState(data);
  const addNewMember = member => {
    setTeam([...team, member]);
  };

  return (
    <div>
      <h1>Something here.</h1>
      <Form addNewMember={addNewMember} />
    </div>
  )
}

export default App;
