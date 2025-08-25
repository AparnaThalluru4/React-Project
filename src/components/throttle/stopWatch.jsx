
export function StopWatch(){

    


    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-5">
                <div className="w-50 fs-4 ">
                    <div className="row">
                        <div className="col p-3 border border-1">
                            <span>h</span>
                        </div>
                        <div className="col p-3 border border-1">
                            <span>min</span>
                        </div>
                        <div className="col p-3 border border-1">
                            <span>sec</span>
                        </div>
                        <div className="col p-3 border border-1">
                            <span>ms</span>
                        </div>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <button>Start</button>
                        <button>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}