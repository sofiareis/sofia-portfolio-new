import {useState} from 'react';
import 'components/navbar/Navbar.scss';
import { Link } from 'react-router-dom';

 function Navbar() {
    const[click, setClick] = useState(false);
    const closeMenu = () =>setClick(false);

    return(
        <nav className='navbar'>
                    <Link to="/" className="navbar-name">
                        Sofia Bandeira dos Reis
                    </Link>  
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to ='/' onClick={closeMenu} className='nav-links'>
                                HOME
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            <Link to ='/projects' onClick={closeMenu} className='nav-links'>
                                PROJECTS
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            <Link to ='/resume' onClick={closeMenu} className='nav-links'>
                                RESUME
                            </Link>
                        </li> 
                    </ul>
        </nav> 
    )
 }

 export default Navbar