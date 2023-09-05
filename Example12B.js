import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { useState } from 'react';
function Example12B(){

  const[user,setUser]=useState([
    "arnab","rahul","pinki","sayan"
  ])
  const name=user.map((n)=>
  <li>{n}</li>
  )

  return (
    <>
    <ol>
    {name}
    </ol>
    </>
  );
} 
export default Example12B;

