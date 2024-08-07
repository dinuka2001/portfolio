import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt="logosubtitle" />
            </Link>
            <nav>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    alt="slobodan" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} activeclassname="active" color='#4d4d4e'/>
                </NavLink>                
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    alt="slobodan" 
                    to="/about"
                    className= "about-link"
                >
                    <FontAwesomeIcon icon={faUser} activeclassname="active" color='#4d4d4e'/>
                </NavLink>

                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    alt="slobodan"
                    to="/contact"
                    className="contact-link"
                >
                    <FontAwesomeIcon icon={faEnvelope} activeclassname="active" color='#4d4d4e'/>
                </NavLink>
            </nav>
        </div>
    )
}
export default Sidebar