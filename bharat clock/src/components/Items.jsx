const Items=({fooditems})=>{
    const handleclick=(event)=>{
        console.log(event);
        console.log(`${fooditems} button clicked`);
    }
    return (
    <li className="list-group-item">
          {fooditems}
        <button className="buttons" onClick={(event)=> handleclick(event)}>buy</button>
    </li>

    );
};
export default Items;