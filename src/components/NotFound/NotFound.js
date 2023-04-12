import './NotFound.css'
import { Link } from 'react-router-dom'

/**
 * Returns a component that visually displays the 404 error to indicate 
 * that the page you are looking for cannot be found.
 * @returns {React.ReactElement} The component showing 404, an explanation and a link back to the home page. 
 */

function NotFound() {
    return (
        <div id='NotFoundContainer'>
            <p id='nombreQuatreCentQuatre'>404</p>
            <p id='texteDeNotFetch'>Oops ! The page you requested does not exist.</p>
            <Link to="/" id='retourPageAccueil'><p>Return to the home page</p></Link>            
        </div>
    )
}

export default NotFound