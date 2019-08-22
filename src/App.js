import React, {useState} from 'react';
import './App.css';
import data from './Data';

import Form from './Components/Form';
import Members from './Components/Members';

function App() {
  const [team, setTeam] = useState(data);
  const [memberToEdit, setMemberToEdit] = useState();
  const addNewMember = member => {
    setTeam([...team, member]);
  };

  const editMember = function(updatedMember) {
    setTeam(team.map((teammate) => {
      if (teammate.id === updatedMember.id) {
        return updatedMember
      } else {
        return teammate
      }
    }));
    setMemberToEdit(null);
  }

  return (
    <div className="container">
      <h1 className="pageTitle">Team Composition</h1>
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} />
      <Members teamList={team} editMember={setMemberToEdit} />
    </div>
  )
}

export default App;
