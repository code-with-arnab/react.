import { data } from "jquery";
import { useState } from "react";


function Example14FPrint_list_of_obj_with_next_prive_button(){
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
    const[index,setIndex]=useState(0)



const next=()=>{
   let x=index;
   setIndex(++x);
}
const prev=()=>{
    let x=index;
    x=x-1;
    setIndex(x);

}


    return(
        <>
        <ol>
    
       
        Name={contact[index].name}
        <br></br>
        <button onClick={prev}>prive</button>
        <button onClick={next}>next</button>
        
    
        </ol>
        </>
    )
    
}
export default Example14FPrint_list_of_obj_with_next_prive_button;