import { useState } from 'react';

function Example14AFatchDataSingleArray() {
  const [fruits, setFruits] = useState(['mango', 'apple', 'banana']);
  const [displayFruits, setDisplayFruits] = useState('');

  const clickme = () => {
    let a=fruits
    let b=a.map((n)=>
  <li>{n}</li>
  )
  setDisplayFruits(b)
};

  return (
    <>
      <h2>single object print:-</h2>
      <button onClick={clickme}>Click me</button>
      <ol>
        {displayFruits}
        
      </ol>
    </>
  );
}

export default Example14AFatchDataSingleArray;
