import 'components/footer/Footer.scss'
import { links } from './Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (    
        <div className="footer-container">
            <p className='footer-contact'>Contact me / Follow me</p>
            {links.map((link) => (
            <a target="_blank" href={link.href}>
                <FontAwesomeIcon icon={link.icon} className='footer-icons'/>
            </a>
            ))}
        </div>
    );
 };
 
 export default Footer;