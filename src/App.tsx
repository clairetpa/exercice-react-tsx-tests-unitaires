import './App.css';

import React, { useState } from 'react';

import Value from "./Value";
import Btn from "./Btn";

function App() {

  /* fonction pour etat de base a 0 */
  const [count, setCount] = useState(0);

  /* fonction pour incrementer de 1 a chaque clic */
  const actionClick=() => {
    setCount(count + 1)
  }

  return (
    <div className="App">

      {/* affichage de la valeur dynamique*/}
      <Value valeur={count}/>

      {/* affichage du bouton*/}
      <Btn clic={actionClick}/>

    </div>
  );
}

export default App;


