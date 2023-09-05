import { useState } from "react";

function D20_frontend_to_mongo(){
    const[name,setName]=useState('')
    const[age,setAge]=useState()

    const Submit= async(e)=>{
      //e.preventDefault();

        const add={"name":name,"age":age}
        //send data to database via POST
        const requestAdd={ //create object //google:post api in react js: https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
            method:'POST',
            headers:{'Content-Type': 'application/json' },
            body:JSON.stringify(add)
        };
        const response=await fetch('http://localhost:5000/addName',requestAdd);
        const data=await response.json();
        //this.setState({ postId: data.id });
        
       
        console.log(data)
       if (data._id != null) {
            alert('todo added succesfully')
          }
          else {
            alert('todo not added')
         }
    e.target.reset();
    setName('')
    setAge()

    }

    
    return(
        
        <div class="right">
        <h2>D20_frontend_to_mongo_and_mongo_to_frontend_datasend</h2>
        <form onSubmit={Submit}>
            <table>
                <tr>
                    <td>ENTER YOUR NAME:</td>
                    <td><input type="text" placeholder="ENTER YOUR NAME" value={name} onChange={(e)=>setName(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td>ENTER YOUR AGE:</td>
                    <td><input type="number" placeholder="ENTER YOUR AGE" value={age} onChange={(e)=>setAge(e.target.value)}></input></td>
                    
                </tr>
                <tr><button>ADD DATA TO DATA-BASE</button></tr>
            </table>

        </form>
        </div>

        
    );
}
export default D20_frontend_to_mongo;