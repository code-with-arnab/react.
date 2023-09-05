import React, { useState } from 'react'
function HideShow(){
    const[status,setStatus]=useState(true)

   const show=()=>{
    setStatus(true)
   }
    return(
        <>
        {
            status?<h1>Hii</h1>:null
        }

        <button onClick={()=>setStatus(false)}>HIDE</button>
        <button onClick={show()}>SHOW</button>

        </>
    )
}
export default HideShow;