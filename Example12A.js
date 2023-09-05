import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { useState } from 'react';
function Example12A(){

  const[num1,setNum1]=useState(0);
  const[num2,setNum2]=useState(0);
  const[ans,setAns]=useState('');

  //function Add(){
   // alert('hii')
 // }

 const Add= () =>{
  const an=parseInt(num1)+parseInt(num2);
  setAns(an)
  setNum1(0);
 
 }
  return (
    <>
    <table>
      <tr>
        <td>enter 1st number=</td>
        <td><input type='number'placeholder='enter 1st number' value={num1} onChange={(e)=>setNum1(e.target.value)}></input></td>
      </tr>
      <tr>
        <td>enter 2nd number=</td>
        <td><input type='number'placeholder='enter 2nd number' value={num2} onChange={(e)=>setNum2(e.target.value)}></input></td>
      </tr> 
      <tr>
        <td><button onClick={Add}>ADD</button></td>
        </tr>
    </table>
    Result:{ans}
    </>
  );
  }
export default Example12A;

