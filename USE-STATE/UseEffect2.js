import {useState,useEffect,React}from 'react';

function UseEffect2(){
    const[count,setCount]=useState(0)
    const[name,setName]=useState('deep')

    useEffect(()=>{
        console.log('loading')

    },[name]);//[data] use for  re-rendar useEffect when data function call

     const update=()=>{
        setCount(count+1)

     }
     const data=()=>{
        setName('Arnab')
     }


    

     

    
    return(
        <>
        <h2>ADD={count}</h2>
        <h2>data={name}</h2>
        <button onClick={update}>click</button>
        <button onClick={data}>change name</button>
        </>
    ) 

}
export default UseEffect2;