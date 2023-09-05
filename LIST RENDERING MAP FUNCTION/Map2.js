function Map2(){
    const IPL=['KKR','CSK','RCB','MI']
    
       const display= IPL.map((team)=>

        <h3>{team}</h3>
        )
    
    return(
        <>
        <h1>use map function with array out-side of return statement</h1>
        {display}
       
        </>
    )
}
export default Map2;