import {data,gender}from './ParentContext';

function ChildB(){
    return(
        <>
        <data.Consumer>
            {
                (name)=>{
                    return(
                        <h1>my name={name}</h1>
                        //..............
                            
                        
                    )
                }
            }
        </data.Consumer>
        </>
    )
}
export default ChildB;