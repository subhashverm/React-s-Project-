import Todoitems from "./Todoitems.jsx";
const Todoitme=({todoitems,ondeleteclick})=>{
    return (
        <div className="todo-item">
           {  todoitems.map((item)=>( <Todoitems todoname={item.duedate}  tododate={item.name} ondeleteclick={ondeleteclick}/>   
        ))}
        </div>
    ) ;

}
export default Todoitme;