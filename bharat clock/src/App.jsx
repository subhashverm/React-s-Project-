import styles from './components/App.module.css';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import  ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';
import Deals from './components/Deals';
import "./App.css";
import Currenttime from './components/Currenttime'; 
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
function App() {
   let fooditems=['milk', 'bread', 'eggs', 'fruits', 'vegetables'];
return(
  <>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/Shop" element={<Shop />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Deals" element={<Deals/>} />
        {/* Add more routes here for Shop, Deals, etc. */}
      </Routes>
    </Router>
<div className={styles.App}>
<Currenttime/>
<ErrorMessage items={fooditems}/>
<FoodItems items={fooditems}/>

</div>
</>
);
}
export default App;
