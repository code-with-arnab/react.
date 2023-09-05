import React, { useState } from "react";

function Example14CPrint_list_of_obj() {
  const [contact, setContact] = useState([
    {
      name: "Arnab",
      phone: "8116668442"
    },
    {
      name: "deep",
      phone: "123456789"
    },
    {
      name: "sayan",
      phone: "36978452"
    },
    {
      name: "pinki",
      phone: "789451368"
    }
  ]);

  const [display, setDisplay] = useState('');

  const clickme = () => {
    let a=contact

    let b=a.map((n)=>
    <tr>
    <td>{n.name}</td>
    <td>{n.phone}</td>
    </tr>
    )
    setDisplay(b)
  

  };

  return (
    <>
      <h2>Print list of objects using static data</h2>
      <button onClick={clickme}>Click Me</button>
      <table border={2}>
      {display}
      </table>
      
    </>
  );
}

export default Example14CPrint_list_of_obj;
