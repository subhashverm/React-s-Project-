import { useState } from "react";
function AddTodo({onnewitem}) {

  const [todoname,settodoname]=useState();
  const [duedate,setduedate]=useState();

  const handlenamechange=(event)=>{
        settodoname(event.target.value);
      }
  const handledatechange=(event)=>{
     setduedate(event.target.value);
  }
  const handleaddbuttonclick=()=>{
onnewitem(todoname,duedate)
settodoname("");
setduedate("");
  }
  return (
    <div className=" conatiner">
      <div className="row apni-row">
          <div className="col-6 ">
          <input type="text" value={todoname} placeholder="Enter Todo here "onChange={handlenamechange} />
        </div>
        <div className="col-4">
          <input type="date" name="" value={duedate} onChange={handledatechange}/>
        </div>
      
        <div className="col-2 text-center">
          <button type="button" className="btn btn-success"  onClick={handleaddbuttonclick}>
            add 
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;