import './LiElement.css'
import PropTypes from 'prop-types'

/**
 * Returns a li tag element describing the keys/attributes of one 
 * point of a detailed object in the parent container. 
 * @param {string} type The category of the key.
 * @param {(React.ReactElement)} content The content of the attribute.
 * @returns {React.ReactElement} The li component with the key highlighted in bold.
 */

function LiElement({type, content}) {
  return (
    <li>
        <span className='bold'>{type}</span> : {content}
    </li>
  )
}

export default LiElement

LiElement.propTypes = {
    type: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number
    ])
}