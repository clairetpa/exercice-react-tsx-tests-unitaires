import './App.css';

import React, { useState } from 'react';

import Value from "./Value";
import Btn from "./Btn";

function App() {

  /* etat a 0 */
  const [count, setCount] = useState(0);

  /* incrementer de 1 a chaque clic */
  const actionClick=() => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Value valeur={count}/>
      <Btn clic={actionClick}/>

    </div>
  );
}

export default App;
