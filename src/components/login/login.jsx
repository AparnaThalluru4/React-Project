
export function Login(){
    return(
        <>
            <form>
                <h2>User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text"></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                </dl>
                <button>Login</button>
            </form>
        </>
    )
}