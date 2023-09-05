import { useState } from "react";


function Example14DFatchDatamultiple_object(){

    const [fruit,setFruits]=useState(['mango','apple','banana'])
    const[dispaly,SetDisplay]=useState([])

    const click=()=>{
        SetDisplay(fruit)

    }


    return(
    <>
    <h2>print single object</h2>
    <button onClick={click}>click to print</button>
    {
        dispaly.map((data)=>
        <p>{data}</p>
        )
    }
    </>
    )
}
export default Example14DFatchDatamultiple_object;