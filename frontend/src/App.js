import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [userName, setUsername] = useState(''); //Lors de l'exsécution de la page

  useEffect(() =>{
    getNames();
  }, [])

  const getNames = async () =>{ // test appel du backend
    const response = await axios.get('/names');
    console.log(response);
    setUsername(response.data);
  }

  return (
    <>
      <h1> MY WORLD-AUTO </h1>
      <h2> IN {userName}</h2>
    </>
     
  );
}

export default App;
