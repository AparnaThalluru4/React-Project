import { useState } from "react"
import { EmiCalculator } from "../components/emi-calculator/emi-calculator";
import { CarouselDemo } from "../components/carousel-demo/carousel-demo";

export function ConditionalDemo1(){

    const[view, setView]=useState(null);

    function handleEMI(){
        setView(<EmiCalculator/>);
    };

    function handleCarousel(){
        setView(<CarouselDemo/>);
    };

    return(
        <div className="container-fluid">
            <div className="border border-2 p-2">
                <h2>Home</h2>
                <button onClick={handleEMI} className="btn btn-primary">EMI Calculator</button>
                <button onClick={handleCarousel} className="btn btn-warning mx-2">Carousel</button>
            </div>
            <div>
                {view}
            </div>
        </div>
    )
}