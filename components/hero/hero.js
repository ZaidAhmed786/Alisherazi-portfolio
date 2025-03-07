import React from "react";
import NavLink from 'next/link'
// import himg from '/images/img/aneelahmed.png'
import { Link } from 'react-scroll'
// import Image from "next/image";

const Hero =() => {
    return (
        <section className="tp-hero-section-1"    >

            <div className="container " >
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h1>I'M <span  style={{color: "#FA7b0e"}}>ALI SHERAZI</span> </h1>
                            </div>
                            <div className="tp-hero-sub">
                                <p className="fw-bold">Your Mentor</p>
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Work with Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                <img src="./images/img/IMG_4209-removebg-preview.png" />
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li><NavLink href="/">Facebook</NavLink></li>
                    <li><NavLink href="/">Twitter</NavLink></li>
                    <li><NavLink href="/">Instagram</NavLink></li>
                </ul>
            </div>
            <div className="visible-text">
                <h3 style={{color: "white"}} ><span style={{color: "#FA7b0e"}}>HUSTLER</span>BRIDGE</h3>
            </div>
        </section>
    )
}

export default Hero;