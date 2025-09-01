function Todoitems({ todoname,tododate,ondeleteclick}){
    return (
           <div className="container">
    <div className="row apni-row">
        <div className="col-6 ">{todoname}
        </div>
        <div className="col-4">{tododate}
        </div>
        <div className="col-2 text-center">
          <button type="button" className="btn btn-danger" onClick={()=>ondeleteclick(todoname)}>Delete</button>
        </div>
      </div>
      </div>
    );
}
export default Todoitems;