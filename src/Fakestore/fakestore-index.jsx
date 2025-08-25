import { createContext, useState } from "react";
import { FakestoreProducts } from "./fakestore-products";

export const SearchProducts = createContext(null);

export function FakestoreIndex(){

    const[cartItems,setCartItems]=useState([]);
    const[cartItemsCount,setCartItemsCount]=useState(0);
    const[total,setTotal]=useState(0);
    const[searchText,setSearchText]=useState(null);

    function handleAddToCartClick(e){
        cartItems.push(e);
        setTotal(total+e.price);
        alert(`${e.title}\n Added to Cart`);
        setCartItemsCount(cartItems.length);
    }

    function handleValueChange(e){
        setSearchText(e.target.value);
    }

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between border border-1 p-2 mt-3 align-items-center">
                <div className="fw-bold fs-3">
                    Fakestore.
                </div>
                <nav>
                    <div className="input-group">
                        <input type="text" onChange={handleValueChange} placeholder="Search fakestore" className="form-control"/>
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </nav>
                <div>
                    <button data-bs-target="#cart" data-bs-toggle="offcanvas" className="btn btn-warning fs-5 bi bi-cart4 position-relative"><span className="position-absolute badge rounded rounded-circle bg-danger text-white">{cartItemsCount}</span></button>
                </div>
                <div className="offcanvas offcanvas-end" id="cart">
                    <div className="offcanvas-header">
                        <h3>Your Cart Items</h3>
                        <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Preview</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(item=>
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td><img src={item.image} width="50" height="50"/></td>
                                            <td>{item.price}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td>
                                        {total.toLocaleString("en-in",{style:"currency",currency:"INR",minimumFractionDigits:"0"})}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </header>
            <section>
                <SearchProducts.Provider value={searchText}>
                    <FakestoreProducts addToCart={handleAddToCartClick}/>
                </SearchProducts.Provider>
            </section>
        </div>
    )
}