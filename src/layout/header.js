import React from 'react'
import LogoImage from '../assets/Group.svg';
function header() {
  return (
    <div>
        <section className='header'>
            <div className='logo'>
                <img src={LogoImage} alt='logo 1'></img>
                <span>Book Store</span>
            </div>
            <div className='navlink'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Courses</a></li>
                    <li><a href='/'>Our Serivces</a></li>
                    <li><a href='/'>Contact Us</a></li>
                </ul>
                <button>Sign in</button>
            </div>
        </section>
    </div>
  )
}

export default header
