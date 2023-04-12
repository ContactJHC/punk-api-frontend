import './Banner.css'
import PropTypes from 'prop-types'

/**
 * Returns a banner composed of an image passed in props. 
 * @param {string} coverBanner The relative path to the image.
 * @param {string} alt The description attribute of the banner image, for accessibility.
 * @returns {React.ReactElement} The banner displaying the image given in props and its description.
 */

function Banner({coverBanner, alt}) {
    return (
        <div id='bannerContainer'>
            <img src={coverBanner} alt={alt} id='bannerPicture' />
        </div>
    )
}

export default Banner

Banner.propTypes = {
    coverBanner: PropTypes.string.isRequired
}