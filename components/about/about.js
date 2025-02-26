// import Image from 'next/image';
import React from 'react'
// import aImg from '/public/images/img/ameel.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <img src='./images/img/Untitled design (4).jpg' />
                              
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>Nice to meet you!</small>
                                <h2>WELCOME TO...</h2>
                                <h5> Your Virtual Presence with Proven Transforming Strategies</h5>
                                <p className='fw-bold'>At Hustler Bridge, we don’t just market your business — we help you create meaningful connections with your audience. Our team of experts leverages cutting-edge digital marketing techniques to ensure your brand stands out in a crowded marketplace. From strategy to execution, we’re here to drive your growth and maximize your ROI.</p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>30</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>1</span>k+</h3>
                                        <p>Awards Win</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>25</span>k+</h3>
                                        <p>Happy clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;