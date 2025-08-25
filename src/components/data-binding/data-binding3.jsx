import { useEffect, useState } from "react"


<h3>Object example</h3>
export function DataBinding3(){

    const [product] = useState({Name:'Samsung TV',Price:43000,ShippedTo:['Delhi','Hyd'],Rating:{Rate:4.2, Count:400}});

    const [products] = useState([
        {Name:'TV',Price:39000,Quantity:4},
        {Name:'Mobile',Price:14999,Quantity:8},
        {Name:'Watch',Price:4999,Quantity:14}
    ]);

    const [data] = useState([
        {category:'Electronics',products:['Televisions','Mobiles','Refrigerators']},
        {category:'Fashion',products:['FootWear','Shirts','Jeans']}
    ])
    
    useEffect(()=>{

    },[]);

    return(
        <>
            <div className="container-fluid m-4 p-4">
                <h2>Product Details</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{product.Price}</dd>
                    <dt>ShippedTo</dt>
                    <dd>
                        <ul>
                            {product.ShippedTo.map(city=>
                                <li key={city}>{city}</li>
                            )}
                        </ul>
                    </dd>
                    <dt>Rating</dt>
                    <dd>
                        {product.Rating.Rate} <span className="bi bi-star-fill text-success"> </span>
                        <span>Count:{product.Rating.Count}</span>
                    </dd>
                </dl>
                <br/><br/>
                <h2>Example For Array Of Products</h2>
                <br/>
                <table className="table table-hover w-100 border border-2 text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,i)=>
                                <tr key={i}>
                                    <td>{product.Name}</td>
                                    <td>{product.Price}</td>
                                    <td>{product.Quantity}</td>
                                    <td>
                                        <button className="btn btn-warning bi bi-pen-fill mx-2"></button>
                                        <button className="btn btn-danger bi bi-trash mx-2"></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <br/><br/>
                <h2>Example For Nested Loop</h2>
                <br/>
                <h3>Dropdown</h3>
                <h5>Using select,optgroup,option</h5>
                <br/>
                <select>
                    {
                        data.map(item=>
                            <optgroup key={item}>{item.category}
                                        {
                                            item.products.map(product=>
                                                <option key={product}>{product}</option>
                                            )
                                        }
                            </optgroup>
                        )
                    }
                </select>
                <br/><br/>
                <h3>Ordered and Unordered List</h3>
                <ol>
                    {
                        data.map(item=>
                            <li key={item}>{item.category}
                                <ul>
                                    {
                                        item.products.map(product=>
                                            <li key={product}>{product}</li>
                                        )
                                    }
                                </ul>
                            </li>
                        )
                    }
                </ol>
            </div>
        </>
    )
}