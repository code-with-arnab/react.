import { useState } from "react";

function UseStatewitObject() {
  const [name, setName] = useState({
    FIRSTNAME: 'ARNAB',
    LASTNAME: 'RAY',
  });

  

  function submit() {
 setName({...name,FIRSTNAME:'SAYAN'})
  }

  return (
    <>
      <h1> hi my frist name is={name.FIRSTNAME} and last name is={name.LASTNAME}</h1>
      <button onClick={submit}>CLICK</button>
      
    </>
  );
}

export default UseStatewitObject;
