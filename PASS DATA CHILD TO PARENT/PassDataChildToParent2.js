import React from 'react';
import { useState } from 'react';
import ClassChild2 from './ClassChild2';

function PassDataChildToParent2(){
const[data,setData]=useState('')
    function get(data){
        setData(data)

    }
    return(
        <>
        <ClassChild2 get={get}></ClassChild2>
        {data}
        </>
    )
}
export default PassDataChildToParent2;