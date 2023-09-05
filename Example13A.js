import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { useState } from 'react';
function Example13A(){

    const[name,setName]=useState('');
    const[massage,setMassage]=useState('')
    


    const clickme= () =>{
        //alert('hii'+ name)
        //API calling
        fetch(`https://api.genderize.io/?name=${name}`)//(free api for testing)
        .then(res=>res.json())//fetch react js(google search)
        .then((data)=>{
            setMassage(data.gender)
        })
           
    }
    /*
    const getdata=()=>{
        fetch(`https://reqres.in/api/users?page=2`)
        .then(res=>res.json())//fetch react js(google search)
        .then((data)=>{
            let allUser=data.data;
            //setMassage(alluser.length)
            let user=allUser.map((user)=>{
                <li>{user.email}</li>
            });
            setMassage(user)

        })
    }
    */


    
    return(
        <>
        <h3>Enter your name:</h3>
        <input type='text'placeholder='enter your name'value={name}onChange={(e)=>setName(e.target.value)}></input>
        <br></br>
        <button onClick={clickme}>clickme</button>
        {massage}<br></br>
    
       
        
        </>
    )
}
export default Example13A;