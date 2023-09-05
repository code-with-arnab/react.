import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { useState } from 'react';

function Example12C() {
    const[user,setUser]=useState([
        "DEEP","rahul","pinki","sayan"
      ])
      

  
  return (
    <>
    <ol>
    {user.map((n)=>
    <li>{n}</li>
    )}
    </ol>
    </>
  );
    
  
}

export default Example12C;
