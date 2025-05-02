import React, { useRef } from 'react';

export default function Uncontrolled() {
    const nameRef = useRef(null);

    function add(e) {
        e.preventDefault();
        console.log(nameRef.current.value);
        nameRef.current.style.color = "red"; 
    }

    return (
        <div>
            <form onSubmit={add}>
                <input type="text" placeholder='enter name' ref={nameRef} />
                <input type="submit"/>
                
            </form>
        </div>
    );

} 