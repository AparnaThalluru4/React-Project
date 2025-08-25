
export function NetflixMain(){
    return(
        <>
            <main className="text-white pt-4">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="d-flex justify-content-center">
                    <div className="mt-3 ">
                    <div className="input-group input-group-lg">
                        <input type="email" className="form-control" placeholder="Email address"/>
                        <button className="btn btn-danger">Get Started<span className="bi bi-chevron-down"></span> </button>
                    </div>
                </div>
                </div>
            </main>
        </>
    )
}