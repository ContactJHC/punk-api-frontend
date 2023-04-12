import './Header.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

/**
 * Returns a header component including a logo and a navigation bar.
 * The underlining of the displayed page allows yourself to find your way around visually. 
 * @returns {React.ReactElement} The Header component with the logo and the navigation bar.
 */

function Header() {
    return (
        <div id="brewdog-header">
            <img src={logo} alt='Brewdog logo' id='brewdog-logo' />
            <nav id='brewdog-nav'>
                {/*A <NavLink> is a special kind of <Link> that knows whether or not it is 
                "active" or "pending" thanks to the 'isActive' boolean.*/}
                <NavLink 
                    to="/" 
                    end
                    className={({ isActive }) => 
                      (isActive ? "brewdog-nav active-nav" : "brewdog-nav not-active-nav")}
                    id='brewdog-nav-home'>
                        Home
                </NavLink>
                <NavLink 
                    to="/apropos"
                    className={({ isActive }) => 
                      (isActive ? "brewdog-nav active-nav" : "brewdog-nav not-active-nav")}
                    id='brewdog-nav-about-us'>
                        About us
                </NavLink>
            </nav>
        </div>
    )
}

export default Header