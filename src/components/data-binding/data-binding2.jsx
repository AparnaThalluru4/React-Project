import { useEffect, useState } from "react";

export function DataBinding2(){
    const [categories] = useState(['All','Electronics','FootWear','Fashion']);
    useEffect(()=>{

    },[]);
    return(
        <>
            <div className="container-fluid mt-4">
                <header className="d-flex justify-content-around border align-items-center border-2">
                    <div className="h3">Amazon</div>
                    <nav>
                        {
                            categories.map((category,i)=>
                                <span className="mx-3" key={i}><a href="#">{category}</a></span>
                            )
                        }
                    </nav>
                    <div>
                        <span className="bi bi-heart-fill mx-3"></span>
                        <span className="bi bi-cart4"></span>
                    </div>
                </header>
                <br></br>
                <ol>
                    {categories.map((category,i)=>
                        <li key={i}>{category}</li>
                    )}
                </ol>
                <br/>
                <select>
                    {categories.map((category,i)=>
                        <option key={i}>{category}</option>
                    )}
                </select>
            </div>
        </>
    )


}