import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/mirrorglobal.svg';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content bg-gradient-to-r from-blue-700 to-blue-700">
        <div>
          <Link to='/'><img className='h-12' src={logo} alt="mirror-global" /></Link>
          
        </div> 
        <div>
            
        </div>
        <div className='uppercase text-white' >
          <span className="footer-title ">study in uk</span> 
         <Link className='link link-hover'>Find uk universities</Link>
          <Link className='link link-hover'>find a course</Link>
          <Link className='link link-hover'>scholarship</Link>
          <Link className='link link-hover'>application process</Link>
        </div> 
        <div className='uppercase text-white'>
          <span className="footer-title">services</span> 
          <Link className="link link-hover">admission consultation</Link> 
          <Link className="link link-hover">pre-departure briefing</Link> 
          <Link className="link link-hover">pastoral care in abroad</Link> 
          <Link className="link link-hover">why us!</Link>
        </div> 
        <div className='uppercase text-white'>
            <span>news</span>
            <Link className='link link-hover '>Testimonial</Link>

        </div>

        <div className="uppercase text-white">
            <span><Link className='link link-hover'>visa & immigration</Link></span>
        </div>
       

        

        
      </footer>
    );
};

export default Footer;