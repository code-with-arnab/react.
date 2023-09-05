import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { useState } from 'react';
function Example13B(){

    const[name,setName]=useState('');
    const index=name.indexOf(" ")//manage titel 
    const firstname=name.substring(0,index)
    const[massage,setMassage]=useState('')



    const clickme= () =>{
        //alert('hii'+ name)
        //API calling
        fetch(`https://api.genderize.io/?name=${firstname}`)
        .then(res=>res.json().then((data)=>{
            setMassage(data.gender)
        }))
           
    }

    return(
        <>
        <h3>Enter your name:</h3>
        <input type='text'placeholder='enter your name'value={name}onChange={(e)=>setName(e.target.value)}></input>
        <br></br>
        <button onClick={clickme}>clickme</button>
        {massage}
        </>
    )
}
export default Example13B;