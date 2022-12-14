import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/mirrorglobal.svg';

const Header = () => { 
    return (
        <div >
           <div className="mb-12 h-28 navbar bg-base-100  bg-gradient-to-r from-red-500 to-green-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        <li tabIndex={0}>
          <a className="justify-between uppercase font-bold text-cyan-500">
            study in uk
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 uppercase text-orange-400 font-semibold ">
            <Link>find uk universities</Link>
            <Link>find a course</Link>
            <Link>scholarship</Link>
            <Link>application process</Link>
          </ul>
          
        </li>
        <li tabIndex={0}>
          <a className="justify-between uppercase font-bold text-cyan-500">
            services
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 uppercase text-orange-400 font-semibold">
            <Link>admission consultation </Link>
            <Link>Pre-departure briefing</Link>
            <Link>pastoral care-in abroad</Link>
            <Link>why us!</Link>
          </ul>
          
        </li>
        <li tabIndex={0}>
          <a className="justify-between uppercase font-bold text-cyan-500">
            news
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 uppercase text-orange-400 font-semibold">
            <Link>testimonial</Link>
            
          </ul>
          
        </li>
        <li tabIndex={0}>
          <a className="justify-between font-bold uppercase text-cyan-500">
             visa & immigration
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 uppercase text-orange-400 font-semibold">
            <Link>visa & immigration</Link>
            
          </ul>
          
        </li>
        
        
      </ul>
    </div>
    <Link to='/'> <img className='h-12' src={logo} alt="" /> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li ><Link className='text-cyan-500 font-bold font-bold' >Home</Link></li>
    <li tabIndex={0}>
          <a className="justify-between uppercase text-cyan-500 font-bold">
            study in uk
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 uppercase text-orange-400 font-semibold ">
            <Link>find uk universities</Link>
            <Link>find a course</Link>
            <Link>scholarship</Link>
            <Link>application process</Link>
          </ul>
          
        </li>
        <li tabIndex={0}>
          <a className="justify-between uppercase text-cyan-500 font-bold">
            services
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 uppercase text-orange-400 font-semibold ">
            <Link>admission consultation </Link>
            <Link>Pre-departure briefing</Link>
            <Link>pastoral care-in abroad</Link>
            <Link>why us!</Link>
          </ul>
          
        </li>
        <li tabIndex={0}>
          <a className="justify-between uppercase text-cyan-500 font-bold">
            news
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 uppercase text-orange-400 font-semibold   ">
            <Link>testimonial</Link>
            
          </ul>
          
        </li>
        <li tabIndex={0}>
          <a className="justify-between uppercase font-bold text-cyan-500">
             visa & immigration
             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 uppercase text-orange-400 font-semibold ">
            <Link>visa & immigration</Link>
            
          </ul>
          
        </li>
      
    </ul>
  </div>
  <div className="navbar-end">
  <div className="tooltip tooltip-bottom " data-tip="9:30AM - 6:30PM">
  <button className=" btn-outline btn btn-ghost bg-gradient-to-r from-red-500 to-green-500">Office-Time</button>
</div>
  </div>
</div>
        </div>
    );
};

export default Header;