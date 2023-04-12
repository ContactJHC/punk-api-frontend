import './Footer.css'
import logo from '../../assets/logo.png'

/**
 * Returns a footer component including the logo and the copyright.
 * @returns {React.ReactElement} The footer component with the logo and copyright.
 */

function Footer() {
    return (
        <footer>
            <div id='logoContainer'>
                <img src={logo} alt='footer logo' id='footerLogo' />
            </div>
            <p id='footerText'>&copy; 2023 Brewdog. All rights reserved</p>
        </footer>
    )
}
export default Footer