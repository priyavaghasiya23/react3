// import React, { useState } from 'react'

// export default function Todo() {
//     const[state,setState]=useState("")
//     const[text,setText]=useState([])

//     function addtext(e){
//         setState(e.target.value)
//     }

//     function submitForm(e){
//         e.preventDefault()
//         setText([...text,state]);
//         setState("")
//     }
//     function delData(i){
//       var NewData=[...text]
//       NewData.splice(i,1)
//       setText(NewData)
//     }

//     function updateData(i){
//        var Newvalue=prompt("enter the new name");

//         if(Newvalue!==null){
//             var updateData=[...text]
//             updateData[i]=Newvalue
//             setText(updateData)
//         }
//     }


  
//   return (
//     <div>
//         <h1>Todo List</h1>
//       <form onSubmit={submitForm}>
//         <input type="text" placeholder='enter the name' value={state} onChange={addtext} />
//         <input type="submit" />
//       </form>
//       {
//         text.map((el,i)=>{
//             return <li>{el} <button onClick={()=>
//             {
//               delData(i)
//             }}>Delete</button> 
//                             <button onClick={()=>
//                             {updateData(i)
                              
//                             }}>Update</button></li>
//         })
//       }
//     </div>
//   )
// }
import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (input.trim() === '') return;

    if (editId !== null) {
      const updated = tasks.map((task, index) =>
        index === editId ? input : task
      );
      setTasks(updated);
      setEditId(null);
    } else {
      setTasks([...tasks, input]);
    }

    setInput('');
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditId(index);
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editId !== null ? 'Update' : 'Add'}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button onClick={() => handleEdit(index)}>Edit</button>{' '}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;