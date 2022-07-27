import React, { useState } from "react";
import Howtouse from "../API/Howtouse";

const Support = () => {
    const [aboutData, setAboutData] =useState(Howtouse);
    return(
       <section className="common-section our-services our-services-rightside">
            <div className="container mb-5">
                <div className="row">
                    
                    <div className="col-12 col-lg-7  our-services-rightside-content d-flex justify-content-center align-item-start flex-column">
                        <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
                        <h1 className="main-heading">World class support is <br/> available 24/7</h1>

                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return(
                                    <>
                                        
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                                <div className="col-10 our-services-data">
                                                    <h2>{title}</h2>
                                                    <p className="main-hero-para">
                                                        {info}
                                                    </p>
                                                </div>
                                        </div>
                                     </>
                                );
                            })}

                        <br/>
                        <button className="btn-style btn-style-border">Learn More</button>
                    </div>
                    <div className="col-12 col-lg-5 our-services-rightside-img">
                        <img src="./Images/payment.jpg" alt="aboutusImg" />
                    </div>
                </div>
            </div>
       </section>
    );
}
export default Support;