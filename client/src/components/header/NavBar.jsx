import './style.scss'

import logo from '../../assets/app/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className='header'>
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <nav className='nav'>
                <ul>
                    <li><Link to='/inicio'>Inicio</Link></li>
                    <li><Link to='/broshure'>Broshure</Link></li>
                    <li><Link to='/plantillas'>Plantillas</Link></li>
                    <li><Link to='contacto'>Contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar