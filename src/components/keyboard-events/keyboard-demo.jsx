import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){

    const[users,setUsers]=useState([{user_id:null}]);
    const[msg,setMsg]=useState(null);
    const[validationclass,setValidationClass]=useState(null);

    useEffect(()=>{
        axios.get('users.json')
        .then(response=>{
            setUsers(response.data);
        })
    },[]);


    function verifyUser(e){
        for(var user of users){
            if(user.user_id===e.target.value){
                setMsg('UserId Taken - Try Another');
                setValidationClass('text-danger');
                break;
            }
            else{
                setMsg('UserId Available');
                setValidationClass('text-success');
            }
        }
    }

    return(
        <>
            <div className="container-fluid">
                <h2>Register User</h2>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onKeyUp={verifyUser} /></dd>
                    <dd className={validationclass}>{msg}</dd>
                </dl>
            </div>
        </>
    )
}