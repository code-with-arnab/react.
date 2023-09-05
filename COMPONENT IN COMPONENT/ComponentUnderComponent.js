import React from "react";
function ComponentUnderComponent(){

    function Other(){
        return(
            <>
            <h1>inner component</h1>
            </>
        );
    }
    return(
        <>
        <h1>main component</h1>
        <Other/>
        </>
    );
}
export default ComponentUnderComponent;
