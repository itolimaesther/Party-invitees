import React, { useState } from 'react';
import './App.css';
import AddtoList from './components/AddtoList/AddtoList';
import  Lists  from './components/Lists/Lists';



export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}


function App() {

  const [people, setPeople] = useState<IState ["people"]>([
    {
      name: 'Max',
      age: 28,
      url: 'https://cdn.pixabay.com/photo/2021/04/25/14/30/man-6206540_1280.jpg',
      note: 'I am ready to party',
    }
  ]);


  return (
    <div className="App">
      <h1 className='header'>People invited for the party </h1>
      <Lists people={people}/>

      <AddtoList/>
    </div>
  );
}

export default App;
