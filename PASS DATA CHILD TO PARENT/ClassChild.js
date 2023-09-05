import React from 'react';
import{useState}from 'react'


function ClassChild(props){
    const[name,setName]=useState('')

    function handelSubmit(e){
        e.preventDefault('');
        props.get(name)

    }
    return(
        <>
        <form onSubmit={handelSubmit}>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <button>SUBMIT</button>
        </form>
        </>
    )
}
export default ClassChild;