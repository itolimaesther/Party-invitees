import React, { useState } from 'react';
import './App.css';



export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }
}


function App(): React.FC<IState ["people"]> {

  const [people, setPeople] = useState([
    {
      name: 'Max',
      age: 28,
      url: 'https://randomuser.me/api/portraits/',
      note: 'I am ready to party',
    }
  ]);


  return (
    <div className="App">
      <h1>People invited for the party </h1>
      <List people={people} />
    </div>
  );
}

export default App;
