function Map3ListofObject(){
    const list=[
        {
            name: "Arnab",
            phone: "8116668442"
          },
          {
            name: "deep",
            phone: "123456789"
          },
          {
            name: "sayan",
            phone: "36978452"
          },
          {
            name: "pinki",
            phone: "789451368"
          }
    ];


const list1=[

    {
        name: "Arnab",
        phone: "8116668442"
      },
      {
        name: "deep",
        phone: "123456789"
      },
      {
        name: "sayan",
        phone: "36978452"
      },
      {
        name: "pinki",
        phone: "789451368"
      }

]

const display=list1.map((dis,index)=>
<tr key={index}>
    <td>{dis.name}</td>
    <td>{dis.phone}</td>
</tr>
    
)


    return(
        <>
        <h1>print list of object inside the return statement </h1>
        <table border={2}>
        <thead>
            <tr>
                <th>NAME</th>
                <th>PHONE</th>
            </tr>
        </thead>
        <tbody>
        {
           
           list.map((data,index)=>
           <tr key={index}>
                <td>{data.name} INDEX IS={index}</td>
                <td>{data.phone}</td>
           </tr>
           
           )
       }
        </tbody>
        </table>


        <h1>print list of object out side the return statement </h1>
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PHONE</th>
                </tr>
            </thead>
            <tbody>
                {display}
            </tbody>
        </table>

        </>
    )
}
export default Map3ListofObject;