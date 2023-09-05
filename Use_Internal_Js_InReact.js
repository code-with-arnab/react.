import React from 'react';

const MyComponent = () => {
  const myFunction = () => {
    // JavaScript code here
    alert('internal js');
  };

  const handleClick = () => {
    // Call the function
    myFunction();
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default MyComponent;
