import { useState } from "react"
import './mouse-animation.css'

export function MouseAnimation(){

    const[styleobj,setstyleobj]=useState({animationName:'spin',animationDuration:'5s',animationIterationCount:'infinite',animationTimingFunction:'linear'});

    function handleMouseDown(){
        setstyleobj({animationName:'spin',animationDuration:'1s',animationIterationCount:'infinite',animationTimingFunction:'linear'});
    };

    function handleMouseUp(){
        setstyleobj({animationName:'spin',animationDuration:'5s',animationIterationCount:'infinite',animationTimingFunction:'linear'});
    };

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div>
                <img onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={styleobj} src="react.jpg" width="200" height="200"></img>
            </div>
        </div>
    )
}