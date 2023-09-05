import React from 'react';
import ReceiveFunctionInChildComponent from "./ReceiveFunctionInChildComponent";

function SendFunctionParentClass() {
    function send() {
        alert(10)
    }

    return (
        <>
            <h1>Send function parent to child component</h1>
            <ReceiveFunctionInChildComponent send={send} />
        </>
    );
}

export default SendFunctionParentClass;
