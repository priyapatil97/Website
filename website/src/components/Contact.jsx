import React from "react";

const Contact = () => {
    return(
        <section className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="contact-leftside col-12 col-lg-5">
                                <h1 className="main-heading fw-bold">Connect With Our<br/> Sales Team</h1>
                                <p className="main-hero-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, nam velit. Consequatur, doloribus inventore delectus
                                Consectetur, nam velit. Consequatur, doloribus inventore delectus doloribus inventore</p>
                                <figure>
                                    <img src="./Images/images4.jpg" alt="contactUsImg" className="img-fluid"/>
                                </figure>
                            </div>

                                {/* Contact form */}

                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="" id="" className="form-control"  placeholder="First Name" />
                                            </div>

                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="" id="" className="form-control"  placeholder="Last Name" />
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="" id="" className="form-control"  placeholder="Phone Number" />
                                            </div>

                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="" id="" className="form-control"  placeholder="Email Id" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input type="text" name ="" id="" className="form-control" placeholder="Add Address" />
                                            </div>
                                            <div className="col-12 ">
                                                <input type="text" name ="" id="" className="form-control" placeholder="Enter Your Message" />
                                            </div>
                                        </div>

                                        <div class="form-check form-checkbox-style ">
                                            <input class="form-check-input" type="checkbox" value="checkbox" id="flexCheckChecked" />
                                            <label class="form-check-label" className="main-hero-para ">
                                                I agree that the thapatecnicalpay may contact me at the email address or phone number above
                                            </label>
                                        </div>
                                        <button type="submit" className="btn-style w-100">Submit</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;