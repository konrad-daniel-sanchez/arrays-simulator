import React, { useState } from 'react';
import Array from './Array';
import SimpleMenu from './SimpleMenu';
import { Button } from '@mui/material';


function ArraySimulator() {
  const [arraysCollection, setArraysCollection] = useState([]);

  const addArray = (newArray) => {
    setArraysCollection(prevArraysCollection => [...prevArraysCollection, newArray]);
  };

  const onCreateArray = (arr) => {
    addArray(arr);
  }

  return (
    <div>
      <h1>Simulador de Arreglos - Daniel Sanchez</h1>
      <div>
        <SimpleMenu onCreateArray = {onCreateArray} />
      </div>
      <div className="array">
        {arraysCollection.map((value, index) => (
          <Array key={index} arrayInput={value} />
        ))}
      </div>
    </div>
  );
}

export default ArraySimulator;
