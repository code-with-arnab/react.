import { useState } from "react";


function Example14BFatchDatamultiple_object(){

    const [fruit,setFruits]=useState(['mango','apple','banana'])


    return(
    <>
    <h2>print single object</h2>
    <ol>
        {fruit.map((data)=>
        <li>{data}</li>
        )}
    </ol>
    </>
    )
}
export default Example14BFatchDatamultiple_object;