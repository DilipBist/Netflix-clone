import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import careit_img from '../../assets/caret_icon.svg'
import menu_icon from '../../assets/menu-button.png'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();
    const [background, setBackground] = useState('transparent');


    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setBackground('#111216')
        }
        else {
            setBackground('transparent')
        }
    }

    const [menubarvisible, setMenbarVisible] = useState(false);


    const handleMenubar = () => {
        setMenbarVisible(!menubarvisible);
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('load', handleMenubar)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('load', handleMenubar)
        }

    }, [])

    // drop down handling 
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const handleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    }

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <div className='navBar' style={{ background: background }}>
            <div className="navbar-left">
                <Link to={'/'}><img src={logo} alt="Logo" /></Link>
                <ul className={`menu-items ${menubarvisible? 'show-menu-items' : ''}`}>
                    <Link to={'/'}>home</Link>
                    <Link to={'/tvshows'}>TV Shows</Link>
                    <li onClick={()=> scrollToSection('blockbluster-movies')}>movies</li>
                    <li onClick={() => scrollToSection('popular-section')}>new & popular</li>
                    {/* <li>my list</li>
                    <li>browser by language</li> */}
                </ul>
            </div>
            <div className="navbar-right">
                <img src={menu_icon} alt="menu_icon" className='menu-icon' onClick={handleMenubar} />
                <img src={search_icon} alt="searchIcon" className='icons' title='click to search'
                  onClick={()=>{navigate('/search') }}
                />
                <p>Childern</p>
                <img src={bell_icon} alt="searchIcon" className='icons' />
                <div className="navbar-profile" onClick={handleDropdown}>
                    <img src={profile_img} alt="searchIcon" className='profile' />
                    <img src={careit_img} alt="searchIcon" className='careit_img' />
                    <div className={`dropdown ${dropdownVisible ? 'active' : ''}`}>
                        <p onClick={() => { navigate('/login') }}>sign out of netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar