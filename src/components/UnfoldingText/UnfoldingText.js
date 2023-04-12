import './UnfoldingText.css'
import vectorDown from '../../assets/icons/vectorDown.png'
import vectorUp from '../../assets/icons/vectorUp.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Returns an insert that unfolds on click, taking as argument 
 * an object with two keys: the title of the insert and its content.
 * @param {object} contentObject The object passed in property.
 * @param {string} contentObject.title The title of the insert.
 * @param {(React.ReactElement)} contentObject.content The content of the insert.
 * @returns {React.ReactElement} The scrolling insert on click.
 */

function UnfoldingText({contentObject}) {

    const [enabled, setEnabled] = useState(false)

    // The listCreation function and 'if' condition allow to automate the list creation if the content 
    // of the passed object is an array, by iteration on its elements.
    const listCreation = (content) => {
        return (
            <ul>
                {content.map((e, i) => <li key={`li ${e}${i}`}>{e}</li>)}
            </ul>
        )
    }
    let content = contentObject.content
    if (Array.isArray(contentObject.content)) {
        content = listCreation(contentObject.content)
    }

    return (
        <div className='unfoldingContainer'>
            <img 
                src={vectorDown} 
                className={enabled ? 'vector vDown disabled' : 'vector vDown enabled'} 
                alt='flèche vers le bas' 
                onClick={e => setEnabled(!enabled)}/>
            <img 
                src={vectorUp} 
                className={enabled ? 'vector vUp enabled' : 'vector vUp disabled'} 
                alt='flèche vers le haut' 
                onClick={e => setEnabled(!enabled)}/>
            <div className='unfoldingTitle' onClick={e => setEnabled(!enabled)}>
                <p>{contentObject.title}</p>                
            </div>
            {enabled && (
                <div className='unfoldingDescription' >
                    {content}
                </div>
            )}
        </div>
    )
}

export default UnfoldingText

UnfoldingText.propTypes = {
    contentObject: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ])
    }).isRequired
}