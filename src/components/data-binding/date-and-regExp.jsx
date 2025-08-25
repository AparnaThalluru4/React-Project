import { useEffect, useState } from "react";
import moment from "moment";

export function DateExample(){

const [departure,setdeparture] = useState();

const[mobile,setmobile]=useState('');


var dept;
useEffect(()=>{
    dept = Date();
    setdeparture(dept);
    setmobile('+918008028319');
},[]);


    return(
    <>
        <div>
            <h2>Date Example</h2>
            {moment(dept).format('dddd DD, MMMM yyyy')}
            <br/><br/>
            <h2>Match Reg Expression example</h2>
            { (mobile.match(/\+91\d{10}/))?'Verified':'Not Verified' }
        </div>
    </>
    )
}