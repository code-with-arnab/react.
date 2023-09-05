import { useState } from 'react';
import $ from 'jquery';

const GetGender = () => {
  const [name, setName] = useState('');
  const index=name.indexOf(" ")
  const firstname=name.substring(0,index)
  const [result, setResult] = useState('');

  const findGender = () => {
    $.ajax({
      url: 'https://api.genderize.io/',
      method: 'GET',
      data: { name: firstname },
      success: (response) => {
        setResult(response.gender);
      },
      
    });
  };

  return (
    <>
      <h1>ENTER YOUR NAME:</h1>
      <input type='text'placeholder='Enter your name'onChange={(e) => setName(e.target.value)}></input>
      <button onClick={findGender}>Know Gender</button>
      {result}
    </>
  );
};

export default GetGender;
