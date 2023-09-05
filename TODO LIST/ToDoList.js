import React, { useState } from "react";

function ToDoList() {
  const [name, setName] = useState('');
  const [display, setDisplay] = useState([]);
  const [updatedName, setUpdatedName] = useState('');

  function submit() {
    setDisplay([...display, name]);
    setName('');
  }

  function delet(index) {
    // Create a new array with the selected item removed and set it as the new display state
   // setDisplay(display.filter((item, i) => i !== index));
    const updatedDisplay = [...display];
    updatedDisplay.splice(index, 1);
    setDisplay(updatedDisplay);
  }

  function update(index) {
    const updatedDisplay = [...display];
    updatedDisplay[index] = updatedName;
    setDisplay(updatedDisplay);
    setUpdatedName(''); // Clear the updatedName state after updating
  }
  
  

  return (
    <>
      <h1>TO-DO-LIST</h1>
      <input
        type="text"
        value={name}
        name=""
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submit}>CLICK TO ADD</button>
      <br />
      <ol>
        {display.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={()=>delet(index)}>DELET</button>
            <input type="text" value={updatedName}name="updatedName" onChange={(e)=>setUpdatedName(e.target.value)}></input>
            <button onClick={()=>update(index)}>UPDATE</button>

          </li>
          
          
        ))}
      </ol>
    </>
  );
}

export default ToDoList;
