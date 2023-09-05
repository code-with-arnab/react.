import React from 'react'

//this is one component
function TwoComponentOneFile(){
    return(
        <>
        <h1>this is origianl component</h1>
        <OtherComponent></OtherComponent>
        </>
    )
}

//this is another component
function OtherComponent(){
    return(
        <>
        <h1>this is other component</h1>
        </>
    )
}

export default  TwoComponentOneFile;

