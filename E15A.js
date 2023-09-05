import { useState } from "react";

function E15A(){
    const[name,setName]=useState('');
    const[number,setNumber]=useState('');
    const[dispaly,SetDisplay]=useState('');
    

    const submit=(e)=>{
        e.preventDefault();//stop-page reloading
        const str=name+" "+number
        SetDisplay(str);
        

    }

    

    return(

        <form onSubmit={submit}>
            <table>
                <tr>
                    <td>ENTER NAME</td>
                    <td><input type="text"name={name}onChange={(e)=>setName(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td>PHONE NUMBER</td>
                    <td><input type="number"name={number}onChange={(e)=>setNumber(e.target.value)}></input></td>
                </tr>
                <tr>
                    
                    <td><button>SUBMIT</button></td>
                </tr>
                <tr>
                    <td>{dispaly}</td>
                </tr>
            </table>
        </form>


    );
}
export default E15A;