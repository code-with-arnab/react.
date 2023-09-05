import React, { useState } from "react";

function E15B2() {
  const [name, setName] = useState('');
  let [n, setN] = useState('');

  const submit = (e) => {
    e.preventDefault();

    // Wrap the 'name' in an object (optional)
   

    // Add the new name to the 'n' variable
    setN(prevN => prevN + name + ' ');

    setName('');
  }

  return (
    <form onSubmit={submit}>
      <table>
        <tbody>
          <tr>
            <td>ENTER NAME</td>
            <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
          </tr>
          
          <tr>
            <td><button type="submit">SUBMIT</button></td>
          </tr>
        </tbody>
      </table>
      {n}
    </form>
  );
}

export default E15B2;
