
import ManageCss from './ManageCssfile';
import './Managecss2.css'
import A from './outSide/A';
function ManageCss2() {
  return (
    <>
    
      <h2 className="app">ManageCss2</h2>
      <ManageCss></ManageCss>
      <h2>this style came from public css</h2>
      <h2 className='i'>this style came from src index.css file</h2>
      <A></A>
      
     
    
    </>
  );
  
}

export default ManageCss2;
