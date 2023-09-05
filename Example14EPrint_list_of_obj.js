import { data } from "jquery";
import { useState } from "react";
import Example14E1Print_list_of_obj from "./Example14E1Print_list_of_obj";

function Example14EPrint_list_of_obj (){

    const[contact,setContact]=useState([
        {
            "name":"Arnab",
            "phone":"8116668442"
        },
        {
            "name":"deep",
            "phone":"123456789"
        },
        {
            "name":"sayan",
            "phone":"36978452"
        },
        {
            "name":"pinki",
            "phone":"789451368"
        }
    ])
    const[display,setDisplay]=useState([])
    const clickme=()=>{
        setDisplay(contact)
    }
return(
<>
<h2>print list of boject use static data</h2>
<button onClick={clickme}>clickme</button>
<table border={8}>
    {
        display.map((data)=>
        <Example14E1Print_list_of_obj user={data}></Example14E1Print_list_of_obj>
        )
    }
</table>



</>


)


}
export default Example14EPrint_list_of_obj;