import React from 'react';
import myFun from './script.js';

const useExternal_js_file_inreact_file = () => {
  const handleClick = () => {
    // Call the function from the imported JavaScript file
    myFun();
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    
    </div>
  );
}

export default useExternal_js_file_inreact_file;
