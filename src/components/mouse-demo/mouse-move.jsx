import { useState } from "react";

export function MouseMove(){

    const[imgposition,setimgposition]=useState({position:null,top:null,left:null});

    function handleMouseMove(e){
        setimgposition({position:'fixed',top:e.clientY+'px',left:e.clientX+'px'});
    };

    return(
        <div onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
                <h1>Move Your Mouse Pointer</h1>
            </div>
            <img style={imgposition} width='50' height='50' src="react.jpg"/>
        </div>
    )
}