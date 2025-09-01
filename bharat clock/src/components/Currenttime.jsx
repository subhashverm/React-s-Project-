import { useEffect, useState } from "react";

const  Currenttime=()=> { 
    const[time,settime]=useState(new Date());
  useEffect(()=>{
    const intervalid=setInterval(() => {
        settime(new Date());
    },1000);
    return ()=>{
        clearInterval(intervalid);
    };
  },[]);
    return (
        <div>
            <p>this is current time: {time.toLocaleDateString()}~{" "} {time.toLocaleTimeString()}</p>
        </div>
    );
};

export default Currenttime;