
export function NavBar(props){
    return(
        <div className="container-fluid">
            <nav className={` d-flex ${props.theme} justify-content-between align-items-center p-2 m-2 border border-2`}>
                <div className="fs-3">
                    {props.brandtitle}
                </div>
                <div className="fs-6">
                    {props.fields.map(field=>
                        <span className="mx-2" key={field}>{field}</span>
                    )}
                </div>
                <div className="fs-6">
                    <button className="btn btn-warning">Signin</button>
                </div>
            </nav>
        </div>
    )
}