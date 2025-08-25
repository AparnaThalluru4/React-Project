
import { NetflixHeader } from "./netflix-header";
import "./netflix-index.css";
import { NetflixSection } from "./netflix-section";

export function NetflixIndex(){
    return(
        <>
            <div className="background">
                <NetflixHeader/>
                <NetflixSection/>
            </div>
        </>
    )
}