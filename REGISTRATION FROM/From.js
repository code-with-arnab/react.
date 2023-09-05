import React, { useState } from "react";

function From() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [display, setDisplay] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const data = {'name': name, 'mail': mail, 'number': number };
    if (name !== "" && mail !== "" && number !== "") {
      if (mail.includes('@')) {
        if (number.length >= 10) {
          setDisplay([...display, data]);
          alert('DONE');
        } else {
          alert('Mobile number should be at least 10 digits.');
        }
      } else {
        alert('Invalid email format.');
      }
    } 
    else {
      alert('Some data missing.');
    }
  };

  return (
    <>
      <h1>Registration Form</h1>

      <form className="container" onSubmit={submit}>
        <table>
          <tr>
            <td>
              <h3>ENTER YOUR NAME</h3>
            </td>
            <td>
              <input
                type="text"
                placeholder="enter your name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>ENTER YOUR EMAIL</h3>
            </td>
            <td>
              <input
                type="text"
                placeholder="enter your mail"
                name="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>ENTER YOUR MOBILE NUMBER</h3>
            </td>
            <td>
              <input
                type="number"
                placeholder="enter your number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">SUBMIT</button>
            </td>
          </tr>
        </table>
      </form>

      {/* Display the submitted data */}
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>MAIL</th>
            <th>NUMBER</th>
          </tr>
        </thead>
        <tbody>
          {display.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.mail}</td>
              <td>{data.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>xxxxxxxxx</h1>
    </>
  );
}

export default From;
