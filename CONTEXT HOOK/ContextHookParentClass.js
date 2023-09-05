import ClassContextA from "./ClassContextA";
import {createContext}from 'react'

//create ,provider,useContext
const data=createContext();
const data1=createContext();
function ContextHookParentClass(){
    const name='arnab'
    const gender='male'
    return(
        <>
        <data.Provider value={name}>
            <data1.Provider value={gender}>
                <ClassContextA></ClassContextA>
            </data1.Provider>
        </data.Provider>
        </>
    )
}
export default ContextHookParentClass;
export{data,data1}