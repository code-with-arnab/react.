import React from "react";
import { useState } from "react";

function Toggle(){
    const[status,setStatus]=useState(true)
    return(
        <>
       {
            status?<h1>Hii</h1>:null
        }
        
        <button onClick={()=>setStatus(!status)}>Toggle</button>
        </>
    )
}
export default Toggle;