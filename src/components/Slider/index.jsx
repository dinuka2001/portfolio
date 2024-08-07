import { Link } from 'react-router-dom';
import './index.scc';
import LogoS from '../../assets/images/LogoS'
const Sidebar = () => {
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src="{LogoS}" alt="logo" />
            <img src="{LogoSubtitle}" alt="logosubtitle" />
        </Link>
    </div>
}

export default Sidebar