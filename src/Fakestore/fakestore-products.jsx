import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { SearchProducts } from "./fakestore-index";

export function FakestoreProducts({addToCart}){

    const context = useContext(SearchProducts)

    const[products,setProducts]=useState([{id:0,title:null,price:0,category:null,description:null,image:null}]);

    function handleAddClick(product){
        addToCart(product);
    }

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            setProducts(response.data);
        });
    },[]);

    const filterProducts = products.filter(product=>
        product.title?.toLowerCase().match(context||"")
    )

    return(

        <div className="d-flex flex-wrap overflow-auto" style={{height:'650px'}}>
            {
                filterProducts.map(product=>
                    <div className="card m-3 p-2" key={product.id} style={{width:'200px'}}>
                        <img src={product.image} height='120' className="card-img-top"/>
                        <div className="overflow-auto card-header" style={{height:'100px'}}>
                            {product.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button onClick={()=>{handleAddClick(product)}} className="btn btn-warning w-100">Add to Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}