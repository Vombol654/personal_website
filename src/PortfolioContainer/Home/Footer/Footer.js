import React from 'react';
import './Footer.css'

class Footer extends React.Component{
render(){
    return(
        <div className ='footer-container'>
            <div className='footer-parent'>
                <img src={require('../../../assets/Home/shape-bg.png')} 
                alt='no-img'/>
            </div>
        </div>
    )
}
}
export default Footer;