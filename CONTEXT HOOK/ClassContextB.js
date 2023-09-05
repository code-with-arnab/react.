import { useContext } from "react";
import { data,data1 } from "./ContextHookParentClass";
function ClassContextB(){
   const Fname= useContext(data);
   const gender=useContext(data1);
    return(
        <>
            <h1>MY NAME IS={Fname}MY GENDER IS={gender}</h1>
        </>
    )
}
export default ClassContextB;