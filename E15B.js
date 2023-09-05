
//code not run in our class this code from chat gpt
import React, { useState } from "react";

function E15B() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [user, setUser] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const submit = (e) => {
    e.preventDefault();

    const data = { name, number };
    if (editIndex === -1) {
      // Add new user data
      setUser([...user, data]);
    } else {
      // Edit existing user data
      const updatedUser = [...user];
      updatedUser[editIndex] = data;
      setUser(updatedUser);
      setEditIndex(-1);
    }

    setName('');
    setNumber('');
  }

  const handleEdit = (index) => {
    const userData = user[index];
    setName(userData.name);
    setNumber(userData.number);
    setEditIndex(index);
  };
  

  const handleDelete = (index) => {
    const updatedUser = [...user];
    updatedUser.splice(index, 1);
    setUser(updatedUser);
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
            <td><button type="submit">{editIndex === -1 ? "SUBMIT" : "UPDATE"}</button></td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>PHONE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.number}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default E15B;
