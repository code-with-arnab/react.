import {useState,useEffect,React}from 'react';

function UseEffect(){
    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log('loading')

    },[]);//[] use for avoid re-rendar useEffect
     const update=()=>{
        setCount(count+1)

     }

    
    return(
        <>
        <h2>ADD={count}</h2>
        <button onClick={update}>click</button>
        </>
    ) 

}
export default UseEffect;