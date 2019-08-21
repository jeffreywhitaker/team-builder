import React, {useState} from 'react';
import './App.css';
import data from './Data';

import Form from './Components/Form';
import Members from './Components/Members';

function App() {
  const [team, setTeam] = useState(data);
  const addNewMember = member => {
    setTeam([...team, member]);
  };

  return (
    <div className="container">
      <h1 className="pageTitle">Team Composition</h1>
      <Form addNewMember={addNewMember} />
      <Members teamList={team} />
    </div>
  )
}

export default App;
