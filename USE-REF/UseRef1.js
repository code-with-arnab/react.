import { useRef,useState} from "react";
function UseRef1(){

const refElement=useRef('')
const[name,setName]=useState('DEEP')

function reset(){
    setName("")
    refElement.current.focus()
    //refElement.current.style.color='red'



}
const color=()=>{
    refElement.current.style.color='blue'

}
    
    return(
        <>
        <input ref={refElement}type="text" value={name} onChange={(e)=>setName(e.target.value)} ></input>
         <button onClick={reset}>RESET</button>
         <button onClick={color}>color change</button>
        </>
    )
}
export default UseRef1;