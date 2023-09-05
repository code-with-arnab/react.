import { useMemo, useState } from "react";

function UseMemo1(){
    const[add,setAdd]=useState(0);
    const[minus,setMinus]=useState(100);
    const multi=useMemo(function multiply(){

        console.log('.............')
        return add*10
},[add])
    return(
        <>
        {multi}
        <button onClick={()=>setAdd(add+1)}>ADDITION</button>
        <span>{add}</span><br></br>

        <button onClick={()=>setMinus(minus-1)}>SUBSTRATION</button>
        <span>{minus}</span>

        
        </>
    )
}
export default UseMemo1; 