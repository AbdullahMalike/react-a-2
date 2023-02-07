import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [ar,setarr] = useState(['']);


  let addvalue = ()=>{
    let a= text;
    ar.push(a)
    setarr([...ar]);
   
  }

  const [text,settext] = useState('')

  let delvalue = ()=>{
    setarr([]);
  }

 const [id,setid] = useState(0)

 let deletetask = ()=>{
  setid(0);
  ar.pop(text);
  setarr([...ar])
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
      <p key={i}>{abc}</p>
{/* edit button  */}
<button>Edit Task</button>

{/* del task button  */}
<button onClick={deletetask}>Delete Task</button>

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
