import React, { useState } from 'react';

function VirtualDomUpdate2() {
  const [rollNumber, setRollNumber] = useState('03');

  function updateRollNumber() {
    setRollNumber('04');
  }

  return (
    <>
      <table>
        <tr>
          <th>NAME</th>
          <th>ROLL</th>
        </tr>
        <tr>
          <td>Arnab</td>
          <td>{rollNumber}</td>
        </tr>
        <tr>
          <td colSpan="2">
            <button onClick={updateRollNumber}>Update</button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default VirtualDomUpdate2;
