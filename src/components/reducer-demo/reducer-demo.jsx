import { useReducer } from "react"

let initialValues = {
    usersCount:0
}

function reducer(state,action){
    switch(action.type){
        case "join":
            return {usersCount:state.usersCount+1}
        case "exit":
            return{usersCount:state.usersCount-1}
    }
}

export function ReducerDemo(){

    const[state,dispatch] = useReducer(reducer,initialValues);

    function handleJoinClick(){
        dispatch({type:"join"});
    }

    function handleExitClick(){
        dispatch({type:"exit"});
    }

    return(
        <div className="container-fluid">
            <h2>Live Users - </h2>
            <iframe src="https://www.youtube.com/embed/4QZdk4f0T_A" className="mt-2"></iframe>
            <div className="mt-2">
                <button onClick={handleJoinClick} className="btn btn-primary bi bi-door-open">Join</button>
                <button onClick={handleExitClick} className="btn btn-warning bi bi-door-closed mx-2">Exit</button>
            </div>
        </div>
    )
}