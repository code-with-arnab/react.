
import {React,useState} from 'react';
function VirtualDomUpate() {
  const [greeting, setGreeting] = useState('hi');

  function f() {
    setGreeting('hello');
  }

  return (
    <>
      <h1 id="greeting">{greeting}</h1>
      <button onClick={f}>CHANGE</button>
    </>
  );
}

export default VirtualDomUpate;
