import { useEffect, useState } from "react";

export function ThrottleDemo(){

    const[clock, setClock]=useState();

    function GetTime(){
        var now = new Date();
        setClock(now.toLocaleTimeString());
    }

    useEffect(()=>{
        setInterval(GetTime,1000);
    },[]);

    return(
       <h2>Throttle Example: {clock}</h2>
    )
}