
export function ButtonDemo(){
    
    function handleDoubleClick(){
        window.open('m1.jpg','mobile','width=400 height=400');
    }

    function handleContextMenu(){
        document.oncontextmenu = function(){
            alert('Right click not allowed');
            return false;
        }
    }

    return(
        <>
            <div className="container-fluid" onContextMenu={handleContextMenu}>
                <h2>Button Events</h2>
                <img onDoubleClick={handleDoubleClick} src="m1.jpg" width="150" height="150"/>
                <p>Double click to view large image</p>
            </div>
        </>
    )
}