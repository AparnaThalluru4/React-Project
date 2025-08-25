import { useState } from "react"

export function EmiCalculator(){

    const[amount,setAmount]=useState('100000');
    const[years,setYears]=useState('1');
    const[rate,setRate]=useState('0.01');
    const[emi,setEmi]=useState(0);
    const[toggleresult,setToggleresult]=useState('d-none');

    function handleAmountChange(e){
        setAmount(e.target.value);
    }

    function handleYearsChange(e){
        setYears(e.target.value);
    }

    function handleRateChange(e){
        setRate(e.target.value);
    }

    function handleCalculateClick(){
        var P = parseInt(amount);
        var N = parseInt(years)*12;
        var R = parseFloat(rate)/12/100;
        var EMI = P * R * (Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
        setEmi(EMI);
        setToggleresult('d-block')
    }

    return(
        <>
        
            <div className="container-fluid">
                <div className="m-3 p-3 border border-2">
                    <h2 className="text-center mt-4">Personal EMI Calculator</h2>
                    <div className="row mt-5">
                        <div className="col">
                            Amount you need &#8377; <input type="text" size="10" value={amount} onChange={handleAmountChange}/>
                        </div>
                        <div className="col">
                            for <input type="text" size="1" value={years} onChange={handleYearsChange}/> years
                        </div>
                        <div className="col">
                            Interest rate <input type="text" size="4" value={rate} onChange={handleRateChange}/> %
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col">
                            <input type="range" onChange={handleAmountChange} className="form-range" min="100000" max="1000000" step="10000" value={amount} />
                            <div>
                                <span>&#8377;1,00,000</span>
                                <span className="float-end">&#8377;10,00,000</span>
                            </div>
                        </div>
                        <div className="col">
                            <input type="range" onChange={handleYearsChange} className="form-range" value={years} min="1" max="5" step="1"/>
                            <div>
                                <span>1Year</span>
                                <span className="float-end">5Years</span>
                            </div>
                        </div>
                        <div className="col">
                            <input type="range" onChange={handleRateChange} className="form-range" value={rate} min="0.01" max="10.00" step="0.05"/>
                            <div>
                                <span>0.01</span>
                                <span className="float-end">10.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col">
                            <button onClick={handleCalculateClick} className="btn btn-primary float-end">Calculate</button>
                        </div>
                    </div>
                    <div className={`row mt-5 ${toggleresult}`}>
                        <div className="col fs-5 text-center">
                            Your EMI amount is <span className="fw-bold">{emi.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0})}</span> for next {years*12} months
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}