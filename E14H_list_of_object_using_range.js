import { useState } from "react";
function E14H_list_of_object_using_range(){
    const[name,setName]=useState([]);
    const[massage,setMassage]=useState([])
    const[alluser,setAlluser]=useState([])
    const[list,setList]=useState([])


    const clickme=()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>res.json())//fetch react js(google search)
        .then((data)=>{
           setAlluser(data)
            //setMassage(alluser.length)
            for (let i=0;i<10;i++)
            {
                list.push(alluser[i].body);
            }

        })
    }
    return(
<>


<button onClick={clickme}>print outside of function</button>
        <ol>
       {
        list.map((data)=>
        <li>{data}</li>
        )
       }
       </ol>


</>
    );
}
export default E14H_list_of_object_using_range;