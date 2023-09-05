function Realdom() {
    function f() {
      // Update the text content of the h1 element using real dom
      document.getElementById('greeting').textContent = 'hello';
    }
  
    return (
      <>
        <h1 id="greeting">hi</h1>
        <button onClick={f}>CHANGE</button>
      </>
    );
  }
  
  export default Realdom;