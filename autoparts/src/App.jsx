import  './App.css'
import Searchbar from "./components/Searchbar"
import AutopartName from "./components/Autopart_name"
import Emptylist from './components/Emptylist';
import Itemlist from "./components/Itemlist"
import { useState } from 'react';
function App() {
// let [textstatevalue,setTextstate]=useState();

let [items,setitems] = useState([]);

const onKeyDown = (event) => {
  if(event.key ==="Enter"){
   let newfoodvalue=event.target.value;
   let newItems=[...items,newfoodvalue];
   setitems(newItems);
   console.log('foodvalue entered is '+ newfoodvalue);
  }
  };

  return (
    < >
    <div className="container">
    <AutopartName/>
      <Searchbar handleSearch={onKeyDown}/>
      {/* <p>{textstatevalue}</p> */}
       <Itemlist listitem={items}/>
  <Emptylist listitem={items} />
       </div> 
    </>
  )
}

export default App
