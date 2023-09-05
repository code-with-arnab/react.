import { useCallback, useState } from "react";
import UsecallBackChild from "./UsecallBackChild";


function UseCallBack(){
    const[add,setAdd]=useState(0)

    const Learning=useCallback(()=>{

    },[])

function addd(){
    setAdd(add+1)
        
}
    return(
        <>
        
        <button onClick={addd}>ADD</button><br></br>
        {add}
        <UsecallBackChild Learning={Learning}></UsecallBackChild>
        </>
    )
}
export default UseCallBack;