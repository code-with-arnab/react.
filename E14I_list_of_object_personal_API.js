import { useEffect, useState } from "react";

function E14I_list_of_object_personal_API () {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAll")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  },
[]);

  return (
    <table>
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody>
        {allUsers.map((user) => (
          <tr>
            <td>{user.pname}</td>
            <td>{user.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default E14I_list_of_object_personal_API;
