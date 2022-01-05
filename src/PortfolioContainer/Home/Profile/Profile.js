import React from 'react';
import Typical from 'react-typical';
import './profile.css'
import ScrollService from '../../../utilities/ScrollService'


class Profile extends React.Component {
    render() {
        return (
            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-details'>
                        <div className='colz'>
                            <div className='colz-icon'>


                                <a href='https://www.facebook.com/antarip.panda/' target="_blank">
                                    <i className='fa fa-facebook-square profile-icon'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-google-plus-square profile-icon'></i>
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
                        </div>
                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                {" "}
                                Hello I'M <span className='highlighted-text'>Ananda</span>

                            </span>
                        </div>
                        <div className='profile-deatils-role'>
                            <span className='primary-text'>
                                {" "}
                                <h1>
                                    {" "}
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Student",
                                            1500,
                                            "Full Stack Web",
                                            1500,
                                            "MERN Stack Dev",
                                            1500,
                                            "React Developer",
                                            1500,
                                            "Freelancer",
                                            1500,
                                        ]}
                                    />


                                </h1>
                            </span>
                            <span className="profile-role-tagline">
                                Exploring and Implementing Web Dev Technologies.
                            </span>
                        </div>
                        <div className='profile-options'>
                            <button className='btn primary-btn'onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Hire Me{""}
                            </button>
                            <a href='anandaR.pdf' download="Ananda's Resume">
                                <button className='btn highlighted-btn'>Get Rsume</button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Profile;