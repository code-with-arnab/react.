import { createContext } from "react";
import ChildA from "./ChildA";


//create,provider=parent class,consumer=child class
const data=createContext();
function ParentContext(){
    const name='ARNAB'
    const gender='male'

    return(
        <>
        <data.Provider value={name}>
        
            <ChildA></ChildA>
        </data.Provider>
        
        
        </>
        
    )
}
export default ParentContext;
export{data};
