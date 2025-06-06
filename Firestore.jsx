import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function Firestore() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  
  const addUser = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: name,
        createdAt: new Date()
      });
      setName("");
      fetchUsers(); 
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setUsers(userList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Firestore CRUD - React</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {new Date(user.createdAt?.seconds * 1000).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Firestore; 