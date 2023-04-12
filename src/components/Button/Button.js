import './Button.css'
import PropTypes from 'prop-types'

/**
 * Returns a clickable component that changes the value of the state passed in parameter.
 * In the context of this project, this component allows to modify the API search endpoint 
 * to update the results.  
 * @param {string} url The URL of the desired endpoint.
 * @param {string} text The text of the button content.
 * @param {Function} urlSetter The setter provided by UseState of the parent component.
 * @returns {React.ReactElement} The 'Button' component to change the endpoint on click.
 */

function Button({url, text, urlSetter}) {
  return (
    <div 
        onClick={e => urlSetter(url)}
        className='searchButton'>
        {text}
    </div>
  )
}

export default Button

Button.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  urlSetter: PropTypes.func.isRequired
}