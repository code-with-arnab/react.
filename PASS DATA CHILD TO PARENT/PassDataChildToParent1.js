import { useState } from "react";
import ClassChild from "./ClassChild";

function PassDataChildToParent1(){
const[data,setData]=useState('')

    function getData(data){
        setData(data)
        
    }
    return(
        <>
        <h1>PASS DATA CHILD TO PARENT COMPONENT USING CALL BACK FUNCTION:-</h1>
        <ClassChild get={getData}></ClassChild>
        {data}
        </>
    )
}
export default PassDataChildToParent1;
//Lifting State Up