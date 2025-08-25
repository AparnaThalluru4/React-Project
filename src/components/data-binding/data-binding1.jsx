import { useEffect, useState } from "react"

export function DataBinding1(){
    const[name,setname]=useState('');
    const [price, setprice] = useState(0);
    const [views] = useState(453456);
    useEffect(()=>{
        setprice(45600);
    },[]);
    useState(()=>{
        setname('Samsung TV');
    },[]);
    return(
        <>
            <div className="container-fluid">
                <h2 className="text-center text-danger pt-4">Data Binding and State component</h2>
                <dl>
                    <dt>Product name</dt>
                    <dd>{name}</dd>
                    <dt>Price</dt>
                    <dd>{price.toLocaleString('en-in',{style:'currency',currency:'INR'})}</dd>
                    <dt>Views</dt>
                    <dd>{views.toLocaleString('en-in',{notation:'compact'})}</dd>
                </dl>
            </div>
        </>
    )
}