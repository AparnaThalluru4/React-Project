import { useEffect,useState } from "react";
import axios from "axios";

export function AjaxXML(){
    const [product, setproduct] = useState({title:'',price:0,image:'',rating:{rate:0,ratings:0,reviews:0},offers:[]});

    function GetProduct(){

        /*
        using XMLHttpRequest
        
        var http = new XMLHttpRequest();
        http.open("get","product.json",true);
        http.send();

        http.onreadystatechange = function(){

            if(http.readyState===4){
                setproduct(JSON.parse(http.responseText));
            }
        }*/


        /* Using Fetch
        
        fetch('product.json')
        .then(response=>response.json())
        .then(product=>{
            setproduct(product);
        })
        */


        // Using axios for fetch data

        axios.get('product.json').then(response=>{
            setproduct(response.data);
        })

    }
    
    useEffect(()=>{
        GetProduct();
    },[]);

    return(
        <>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-3">
                    <img src={product.image} width="100%"/>
                </div>
                <div className="col-9">
                    <div className="fs-4">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success rounded">{product.rating.rate}<span className="bi bi-star-fill"></span></span>
                        <span className="mx-2 fw-bold text-secondary">{product.rating.ratings.toLocaleString()}</span>
                        <span className="mx-2 fw-bold text-secondary">{product.rating.reviews.toLocaleString()}</span>
                    </div>
                    <div className="mt-3">
                        <div className="h1">{product.price.toLocaleString('en-in', { style:"currency", currency:"INR", minimumFractionDigits:0 })}</div>
                    </div>
                    <div className="mt-3">
                        <h5>Available Offers</h5>
                        <ul>
                            {
                                product.offers.map((offer,i)=>
                                <li className="bi bi-tag-fill text-success my-3" key={i}><span className="text-secondary">{offer}</span></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}