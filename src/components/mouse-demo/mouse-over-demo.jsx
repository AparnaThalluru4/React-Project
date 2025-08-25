import axios from "axios";
import { useEffect, useState } from "react";
import './mouse-over-demo.css'

export function MouseOverDemo(){
    
    const[mobiles,setmobiles]=useState([{img_src:null}]);
    const[previewsrc,setpreviewsrc]=useState('m1.jpg');

    useEffect(()=>{

        axios.get('mobiles.json')
        .then(response=>{
            setmobiles(response.data);
        })
    },[]);

    function handleMouseOver(e){
        setpreviewsrc(e.target.src);
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    {
                        mobiles.map(mobile=>
                            <div className="my-4 container-style">
                                <img onMouseOver={handleMouseOver} src={mobile.img_src} key={mobile.img_src} width='49px' height='50px'/>
                            </div>)
                    }
                </div>
                <div className="col-10">
                    <img src={previewsrc} width="400" height="400"/>
                </div>
            </div>
        </div>
    )
}