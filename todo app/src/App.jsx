import Appname from "./components/Appname"; 
import AddTodo from "./components/AddTodo.jsx";
import Todoitem from "./components/Todoitem.jsx";
import './App.css';
import Empty from "./components/Empty";
import {useState} from 'react';
function App() {
  const [todoitems,settodoitems]=useState([]); 
  const handlenewitem=(itemname,itemduedate)=>
  {
    console.log(`new item added ${itemname} date: ${itemduedate} `)
    const newtododitems=[...todoitems,{name: itemname,duedate:itemduedate},];
    settodoitems(newtododitems);
  };

  const handledeleteitem=(todoitemname)=>{
    const newtodoname=todoitems.filter(item=>item.name !== todoitemname);
    settodoitems(newtodoname); 
    console.log(`item deleted ${todoitemname}`);

  }
  return (
    <center className="todo-app">
    <Appname/>
        <AddTodo onnewitem={handlenewitem}/>
        <Todoitem todoitems={todoitems} ondeleteclick={handledeleteitem}/>
        <Empty todoitems={todoitems}/>
    </center>
  );
}

export default App;
