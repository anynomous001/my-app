import React from 'react'
import './NavbarStyle.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = React.useState(false)
    const handleClick = () => {

        setClick(prevclick => !prevclick);
    };

    const [headerbgColor, setheaderbgColor] = React.useState(false)

    /* React.useEffect(function () {
         if (window.scrollY >= 50) {
             setheaderbgColor(true)
         } else {
             setheaderbgColor(false)
         }
     }, [scroll])*/
    const changecolor = () => {
        if (window.scrollY >= 100) {
            setheaderbgColor(true)
        } else {
            setheaderbgColor(false)
        }
    }

    window.addEventListener('scroll', changecolor)

    return (
        <div className={headerbgColor ? 'header header-bg' : 'header'}>
            <Link to='/'><h1>Portfolio.</h1></Link>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/Project'>Project</Link></li>
                <li><Link to='/About'>About</Link></li >
                <li><Link to='/Contact'>Contact</Link></li >
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ?
                    <FaTimes size={25} style={{ color: '#fff' }} /> :
                    <FaBars size={25} style={{ color: '#fff' }} />
                }
            </div>
        </div >
    )
}

export default Navbar