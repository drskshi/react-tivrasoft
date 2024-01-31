import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { links } from '../data'
import Logo from '../images/logo.jpeg'
import {FiAlignRight} from 'react-icons/fi'
import {MdOutlineClose} from 'react-icons/md'
import React from 'react'
import './navbar.css'




const Navbar = () => {
    const[isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav__container">
            <div className="dropping_logo">
            <Link to="/" className='logo' onClick={() =>setIsNavShowing(false)}>
                 <img src={Logo} className='logo-img' alt="Nav Logo"/>
               
             </Link>
            </div>
             <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) =>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav': ''}
                                onClick={() => setIsNavShowing(prev => !prev)}
                                >{name}

                                </NavLink>
                            </li>

                        )
                })
            }
             </ul>
             <button className="nav__toggle-btn"   onClick={() => setIsNavShowing(prev => !prev)}>
             {
                isNavShowing?  <MdOutlineClose/> :<FiAlignRight/>
             }
             
             </button>
        </div>
    </nav>
  )
}

export default Navbar