import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
    return(
        <>
            <div id ="notfound">
                <div className="notfound ">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>WE ARE SORRY, PAGE NOT FOUND</h2>
                    <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
                        CHANGED OR IS TEMPORARLY UNAVAILABLE.
                    </p>
                    <NavLink to="/" className="notfound-home">Back to homepage</NavLink>
                </div>
            </div>

        </>
    );
}
export default Errorpage;