import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [ar,setarr] = useState(['']);


  let addvalue = ()=>{
    let a= text;
    ar.push(a);
    setarr([...ar]);
   
  }

  const [text,settext] = useState('')

  let delvalue = ()=>{
    setarr([]);
  }

//  const [id,setid] = useState(0)

 let deletetask = (index)=>{
  // setid(0);
  ar.splice(index,1);
  setarr([...ar])
 }


let edittask = (i)=>{
var  newval =window.prompt("Enter new value");
ar.splice(i,1,newval);
setarr([...ar]);
} 


// html code 

  return (
    <div className="App">
      <header className="App-header">

      <div className='editapp'>

        
   <div >
    <h1 className='edittext'>ToDo App</h1>
    <hr className='editline'></hr>
   </div>
   
    <div>

    <input onChange={(e)=>{
  settext(e.target.value)
}} type="text" placeholder='Enter Task' className='inpedit' name="" id="" />
<br></br>
{
  ar.map((abc,i)=>{
    return(
    <div>
      <p key={i} className='paraedit'>{abc}</p>

{/* edit button  */}
<button className='editbutton' onClick={()=>edittask(i)}>Edit Task</button>

{/* del task button  */}
<button className='editdelbutton' onClick={()=>deletetask(i)}>Delete Task</button>

    </div>
      )
      
  })
}
<br></br>
<button className='editbutton' onClick={addvalue}>Add Task</button>
<button className='editdelbutton' onClick={delvalue}>Deleten All Task</button>

    </div>
    </div>
      </header>
    </div>
  );
}

export default App;
