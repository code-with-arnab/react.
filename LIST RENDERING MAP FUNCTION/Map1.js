function Map1(){
    const IPL=['KKR','CSK','RCB','MI']
    return(
        <>
        <h1>use map function with array in-side of return statement</h1>
        {
            IPL.map((team)=>

            <h3>{team}</h3>
            )
        }
        </>
    )
}
export default Map1;