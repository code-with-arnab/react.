import { useState } from "react";
function E14G_list_of_object_print_using_API(){
    const[name,setName]=useState([]);
    const[massage,setMassage]=useState([])
    const[alluser,setAlluser]=useState([])
    const[aaaa,setAaa]=useState([])


    
    const clickme=()=>{
      //  fetch(`https://jsonplaceholder.typicode.com/posts`)
     //   .then(res=>res.json())//fetch react js(google search)
     //   .then((data)=>{
     //      setAlluser(data)
           //setMassage(alluser.length)
            

       // })
    //}
                           //OR

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setAlluser(data));
    
    }








    const click=()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>res.json())//fetch react js(google search)
        .then((data)=>{
           setAlluser(data)
            //setMassage(alluser.length)
        
            

        })
    let a=alluser
    let b=a.map((n)=>
    <tr>
  
    <td>{n.body}</td>
    
  
    </tr>
    )
  setAaa(b)
    }





    
    
    


    
    return(
        <>
        
        
        <button onClick={clickme}>print outside of function</button>
        <ol>
        {
        alluser.map((data)=>
        <li>{data.body}</li>

        )
        }
        </ol>




        <button onClick={click}>print inside of function</button>
        <table>
        {aaaa}
        </table>
        





        

            
       
        
        </>
    )
}
export default E14G_list_of_object_print_using_API;