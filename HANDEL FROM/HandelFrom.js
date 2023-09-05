import React, { useState } from "react";
import Admin from "./Admin";

function HandelFrom() {

    const[name,setName]=useState()

    const[email,setEmail]=useState()

    const[number,setNumber]=useState()

    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState("");

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const[display,setDisplay]=useState([])

    const submit=(e)=>{
        e.preventDefault();

        const data={'name':name,'email':email,'number':number,'password':password}

        if(name!=='' && email!=="" && number!=="" && password!==""){
            if(email.includes('@')){
                if(number.length>=10){
                    setDisplay([...display,data])
                    alert('submit done')
                }
                    else{
                        alert('check your mobile number')
                    }
            
            }
            else{
                alert('check your email')
            }
        }
        else{
            alert('data missing')
        }

    }

    return (
        <>
            <form className="HandelFromPosition" onSubmit={submit}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>REGISTRATION FORM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ENTER YOUR NAME:</td>
                            <td>
                                <input type="text" placeholder="Enter your name"  value={name} onChange={(e)=>setName(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>ENTER YOUR EMAIL:</td>
                            <td>
                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                        <td>ENTER YOUR NUMBER:</td>
                            <td>
                                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>PASSWORD:</td>
                            <td>
                                <input
                                     type={showPassword ? "text" : "password"}
                                     placeholder="Enter your password"
                                     value={password} // Bind input value to password state
                                     onChange={(e) => setPassword(e.target.value)} // Update password state
                                />
                                <button type="button" onClick={handlePasswordToggle}>
                                    {showPassword ? "Hide" : "Show"} Password
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={2}>
                                <button type="submit">SUBMIT</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </form>


            {/*
            <table>
                <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>NUMBER</th>
                    <th>PASSWORD</th>
                </tr>
                </thead>
                <tbody>
                    {
                        display.map((data,index)=>(
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.number}</td>
                              <td>{data.password}</td> 
                            <td>{data.password.replace(/./g, '*')}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
                */}


        <Admin display={display} />
        
                
        </>
    );
}

export default HandelFrom;
