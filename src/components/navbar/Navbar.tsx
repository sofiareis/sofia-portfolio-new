import React, {useState} from 'react';
import 'components/navbar/Navbar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

 function Navbar() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () =>setClick(false);

    return(
        <nav className='navbar'>
            <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Sofia Bandeira dos Reis
                    </Link>  
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} className={click? 'fa-times' : 'fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to ='/' onClick={closeMenu} className='nav-links'>
                                Home
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            <Link to ='/projects' onClick={closeMenu} className='nav-links'>
                                Projects
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            <Link to ='/resume' onClick={closeMenu} className='nav-links'>
                                Resume
                            </Link>
                        </li> 
                    </ul>
                </div>
        </nav> 
    )
 }

 export default Navbar


 /*

<div className={navbarStyles.navbarContainer}>
                    <Link to="/" className={navbarStyles.navbarLogo}>
                        Sofia Bandeira dos Reis
                    </Link>  
                    <div className={navbarStyles.menuIcon} onClick={handleClick}>
                        <i className={click ? 'fas fatimes': 'fas fabars'} />
                        
                    </div>
                    <ul className={click ? 'navMenu active' : 'navMenu'}>
                        <li className={navbarStyles.navItem}>
                            <Link to ='/' onClick={closeMenu}>
                                Home
                            </Link>
                        </li> 
                        <li className={navbarStyles.navItem}>
                            <Link to ='/projects' onClick={closeMenu}>
                                Projects
                            </Link>
                        </li> 
                        <li className={navbarStyles.navItem}>
                            <Link to ='/resume' onClick={closeMenu}>
                                Resume
                            </Link>
                        </li> 
                    </ul>                    
                </div>

*/