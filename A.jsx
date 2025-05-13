import React, { useState } from 'react';
import B from './B';
import { myContext } from './Context';

export default function A() {
  const [state, setState] = useState({
    name: 'priya',
    email: 'priyavaghasiya23@gmail.com',
  });

  return (
    <div>
      <h1>{state.name}</h1>

      {/* ✅ Capital "P" in Provider */}
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}