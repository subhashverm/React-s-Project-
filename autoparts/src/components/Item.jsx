const Item=({items ,bought ,handleBuy})=>{
    return (
          <li className={`list-group-item ${ bought && "Active" }`}>
            {items}
          <button  className ="buttons "
          onClick={handleBuy} >
          Buy</button>
          </li>
    );
}
export default Item;