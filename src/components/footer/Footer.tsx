import 'components/footer/Footer.scss'
import { links } from './Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (    
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <p className='footer-contact'>SOCIAL</p>
                    <div className='footer-links'>
                        {links.map((link) => (
                        <a target="_blank" href={link.href}>
                            <FontAwesomeIcon icon={link.icon} className='footer-icons'/>
                        </a>
                        ))}
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-section">
                    <p>&copy; 2023 Sofia Bandeira dos Reis</p>
                </div>
            </div>
        </div>
    );
 };
 
 export default Footer;