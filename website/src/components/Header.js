import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex flex-column justify-content-center align-items-start">
                            <h4 className="display-2">Online Payment Made <br />Easy For You.</h4>
                            <p className="main-hero-para"> With the easiest integration, completely online onboarding, feature filled checkout and best in class performance, quickly go live with Razorpay and experience the future of payments.</p>
                            <h3>Get early access for you</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Enter Your Email" />
                                <div className="input-group-button">Get it now</div>
                            </div>
                        </div>
                        <div className="col-12  col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images ">
                            <img src="./Images/images1.jpg" alt="heroimg" className="img-fluid" />
                            <img src="./Images/image2.jpg" alt="heroimg" className="img-fluid main-hero-img2" />
                        </div>
                    </div>
                </section>
            </header>

        </>
    );
}
export default Header;