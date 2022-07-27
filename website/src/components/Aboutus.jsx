import React, { useState } from "react";
import Howtouse from "../API/Howtouse";

const Aboutus = () => {
    const [aboutData, setAboutData] =useState(Howtouse);
    return(
       <section className="common-section our-services">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                        <img src="./Images/payment.jpg" alt="aboutusImg" />
                    </div>
                    <div className="col-12 col-lg-7  our-services-list ">
                        <h3 className="mini-title"> -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLIY</h3>
                        <h1 className="main-heading">How to use the App?</h1>

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
                </div>
            </div>
       </section>
    );
}
export default Aboutus;