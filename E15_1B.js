import React, { useState } from "react";

function E15_1B() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  //const [display, setDisplay] = useState('');
  const [user, setUser] = useState([]);

  const submit = (e) => {
    e.preventDefault();

    const data = { 'name': name, 'number': number };
    setUser([...user, data]); //use call back and spread operator

    setName('');
    setNumber('');
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
            <td>PHONE NUMBER</td>
            <td><input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /></td>
          </tr>
          <tr>
            <td><button type="submit">SUBMIT</button></td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data, index) =>
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.number}</td>
            </tr>
          )}
        </tbody>
      </table>
    </form>
  );
}

export default E15_1B;