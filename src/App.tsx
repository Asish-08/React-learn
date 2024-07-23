import Message from './Message';
import "./App.css"
import Axios from 'Axios';
import { useEffect, useState } from 'react';

  /* ternary operators, lists and CSS
  const planets=[
    {name: "Mars" ,isGasPlanet : false},
    {name: "Earth" ,isGasPlanet : false},
    {name: "Jupiter", isGasPlanet : true},
    {name: "Venus", isGasPlanet : false},
    {name: "Neptune" ,isGasPlanet : true},
    {name: "Uranus", isGasPlanet : true}
  ]
  return( <div className="App">
    {planets.map((planet,key)=> !planet.isGasPlanet ? <h1 key={key}>{planet.name}</h1> : null)},
  </div>);*/

  // states and usestateHook
  /*const [count, setCount]=useState(0);
  
  const inc_count=()=>{
    setCount(count+1);
    //console.log(count)
  }
  const dec_count=()=>{
    setCount(count-1);
    //console.log(count)
  }
  const set_count_zero=()=>{
    setCount(0);
   // console.log(count)
  }
  return( <div className="App">
    <button onClick={inc_count}>Increase</button>
    <button onClick={dec_count}>Decrease</button>
    <button onClick={set_count_zero}>Set to Zero</button>
    <h1>{count}</h1>
     </div>);
*/
/* CRUD
function App(){
  const [todolist,setTodoList]=useState([]);
  const [newtask,setNewTask]=useState("");
  const handlechange = (event) => {
    setNewTask(event.target.value);
  };
  const addnewtask=()=>{
    setTodoList([...todolist,newtask]);
  }
  const removeTask=(taskName)=>{
    const newTodoList=todolist.filter((task)=>{
      if(task === taskName){
        return false;
      }
      else{
        return true;
      }
    });
    setTodoList(newTodoList)
  };
  return( 
  <div className="App"> 
    <div className='addTask'>
      <input onChange={handlechange}/>
      <button onClick={addnewtask}>Addtask</button>
    </div>
    <div className='list'>{todolist.map((task)=>{
      return (<h1>{task} <button className='removebutton' onClick={()=>removeTask(task)}>X</button></h1>);
    })}</div>
    
   
  </div>
  )
}*/

function App(){
  const [predictAge, setPredict]=useState('');
  const [name,setName]=useState(0);
  const getpredict= ()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredict(res.data)
    });
  }
  useEffect(()=>{
    getpredict()
  },[]);
  
  return (
    <div>
      <input placeholder='Type Your Name' type='text' 
      onChange={(event)=>{setName(event.target.value);}}/>
      <button onClick={getpredict}> Predict </button>
      <p>Name:{predictAge?.name}</p>
      <p>Age:{predictAge?.age}</p>
      <p>Count:{predictAge?.count}</p>
    </div>);
}
export default App;