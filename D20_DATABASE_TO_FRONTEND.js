import { useEffect,useState } from "react";

function D20_DATABASE_TO_FRONTEND(){
const[detail,setDetails]=useState([])
useEffect(() => {
    fetch("http://localhost:5000/getAll")
      .then((res) => res.json())
      .then((data) =>  setDetails(data)
        
      );
  },
[]);
    return(
        
        <div class="right">
        <h2>MONGO TO FRONTEND </h2>
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {detail.map((user)=>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
                
                )}
                
            </tbody>
        </table>
        </div>

        
    )

}
export default D20_DATABASE_TO_FRONTEND;