import Item from './Item.jsx';
import { useState } from 'react';
function Itemlist({listitem}) { 
    let [activeitems,setactiveitems]=useState([]);  
    let onBuyButton=(items,event)=>{
        let newItems=[...activeitems,items];
        setactiveitems(newItems)
        
    }
     return( <>
        <ul className="list-group">
            {listitem.map((items)=>(
                <Item items={items}
                bought={activeitems.includes({items})}
                handleBuy={(event)=> onBuyButton(items,event)} key={items} />
            ))}
</ul>
</>
    );
}
export default Itemlist;