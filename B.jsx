import React, { useContext } from 'react';
import { myContext } from './Context';

export default function B() {
  const data = useContext(myContext);
  console.log(data);

  return (
    <div>
      <h1>{data?.email}</h1>
    </div>
  );
}