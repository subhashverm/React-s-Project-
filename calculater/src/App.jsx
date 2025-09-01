import Button from './components/button.jsx';
import Display from './components/display.jsx';
import { useState } from 'react';
function App() {
  const [calval,setcalval]=useState("");
  const onButtonClick=(buttonText)=>
  { 
     if (buttonText==='C')
  { setcalval("");
  }
    else if (buttonText==='=')
    {
const result =eval(calval);
setcalval(result);
    }
    else{
      const newdisplayvalue=calval+buttonText;
      setcalval(newdisplayvalue);
    }
  }
  return (
    <div className="calculater">
    <Display display={calval}/>
    <Button onButtonClick={onButtonClick}/>
    </div>
  );
}
export default App;