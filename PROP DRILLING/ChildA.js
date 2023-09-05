import ChildB from "./ChildB"

function ChildA({data}){
    return(
        <>
        <ChildB AAA={data}></ChildB>
        </>
    )
}
export default ChildA