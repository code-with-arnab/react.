import React from 'react';

function ReceiveFunctionInChildComponent(props) {
    function abc(){
       {props.send()}
    }
    return (
        <>
        <button onClick={abc}> CLICK ME</button>
            
        </>
    );
}

export default ReceiveFunctionInChildComponent;
