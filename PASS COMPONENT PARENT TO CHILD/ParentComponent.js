import React from 'react'
import ChildComponent from './ChildComponent';
function ParentComponent(){
    return(
        <>
        <ChildComponent Dummy={Dummy}></ChildComponent>
        </>
    )
}
export default ParentComponent;


//component
const Dummy=()=>{
    return(
        <h1>DUMMY COMPONENT</h1>
    )
}