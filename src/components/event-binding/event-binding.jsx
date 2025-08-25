import { useState } from "react"

export function EventBinding(){
    
    const [msg,setmsg] = useState(null);

    function navClick(){
        alert('Navbar clicked');
    }

    function searchClick(e){
        e.stopPropagation();
        alert('Search here');
    }

    return(
        <>
           <nav onClick={navClick}>
                <h2>Amazon</h2>
                <button onClick={searchClick} className="bi bi-search btn btn-warning"></button>
            </nav> 
        </>
    )
}