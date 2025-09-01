import './App.css'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer'
import Sidebar from './components/Sideebar'
import Home from './components/Home'
import Createpost from './components/Createpost'
import { useState } from 'react'
import postlistprovider from './Store/post-list-store';
function App() {
 const [selecttab,setselecttab]= useState("Create Post");
  return (

<postlistprovider>
  <div className='Appcontainer'>
    <Sidebar selecttab= {selecttab} setselecttab={setselecttab}/>
    <div className='content'>
<Header/>
{selecttab==="Home" ? <Home 
/>:<Createpost></Createpost> }
<Footer/>
</div>
</div>

  </postlistprovider>
    
  )
}

export default App
