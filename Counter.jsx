import React, { useState } from 'react';

export default function Counter() {
    const [state, setState] = useState(0);

    function Inc() {
        setState((prevState) => prevState + 1);
    }

    return (
        <div>
            <h1>Counter is {state}</h1>
            <button onClick={Inc}>Click</button>
        </div>
    );
}
