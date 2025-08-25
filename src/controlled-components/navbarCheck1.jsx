import { useState } from "react"
import { NavBar } from "./navbar1"

export function CheckNavbar(){
    const[shopperItems] = useState(['Home','About','Mobiles','Fashion','Contact']);
    return(
        <div className="container-fluid">
            <header>
                <NavBar theme="bg-secondary" brandtitle="Amazon" fields={['Home','Shop','Pages','Blog','Docs']}/>
            </header>
            <section>
                <NavBar theme="bg-primary" brandtitle="Shopper." fields={shopperItems}/>
            </section>
        </div>
    )
}