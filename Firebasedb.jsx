import React, {  useState, useEffect } from 'react';
import { getDatabase, onValue,ref,set } from "firebase/database";
import { app } from '../Firebase';



const database = getDatabase(app);
export default function Firebasedb  ()  {

    const [state,setState]=useState({
        username:"",
        email:""
    })

    useEffect(()=>{
        const starCountRef=ref(database,'user/priya/');
        onValue(starCountRef,(snapshot)=>{
            const data=snapshot.val();
            console.log("data",data)
            setState(data)
        });
    },[])

    function sendData(){
        set(ref(database, 'users/priya'), {
    username: "priya",
    email: "priyavaghasiya@gmail.com",
    }).then(()=>{
        console.log("success");
    }).catch((error)=>{
        console.log(error);

    });
    

}
    
    return (
        <div>
            <h1>FirebaseDatabase</h1>
            <button onClick={sendData}>send data</button>
            <h1>{state.username}</h1>
        </div>
    );
}

