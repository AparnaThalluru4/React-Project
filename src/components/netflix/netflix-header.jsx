
export function NetflixHeader(){
    return(
        <>
            <header className="d-flex justify-content-between p-4">
                <div className="fs-1 fw-bold text-danger">
                    Netflix
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="input-group">
                            <span className="bi bi-translate input-group-text"></span>
                            <select className="form-select">
                                <option>Language</option>
                            </select>
                    </div>
                    <button className="btn btn-danger mx-2">SignIn</button>
                </div>
            </header>
        </>
    )
}