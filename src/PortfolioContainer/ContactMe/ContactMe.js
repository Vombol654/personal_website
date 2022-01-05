import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from 'emailjs-com';
import {useAlert} from 'react-alert'

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
   

    const fadeInSubscription =ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_xnp4nc2','template_1swegaj',e.target,'user_93NMJ5hmK5meEeBvp23DV').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

   

    return (
        <div className="main-container fade-in" id={props.id || ""}>
            <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
                    </h2>{" "}

                    <a href='https://www.facebook.com/antarip.panda/' target="_blank">
                        <i className='fa fa-facebook-square profile-icon'></i>
                    </a>
                  
                    <a href='https://twitter.com/a_panda654' target="_blank">
                        <i className='fa fa-twitter-square profile-icon'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCrzNq7HRkQWtZ2Kb_WRhEGg' target="_blank">
                        <i className='fa fa-youtube-square profile-icon'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/ananda-panda-630428210' target="_blank">
                        <i className='fa fa-linkedin-square profile-icon'></i>
                    </a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="image not found" />
                    </div>
                    <form onSubmit={sendEmail}>
                        <p></p>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"  />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="useremail"   />

                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" />

                        <div className="send-btn">
                            <button type="submit">
                                send
                                <i className="fa fa-paper-plane" />
                              
                             
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}