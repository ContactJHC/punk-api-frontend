import './Spinner.css'
import React from 'react'

/**
 * Returns a spinner composed of two rotating colored rings with changing diameters.
 * @returns {React.ReactElement} The dynamic spinner component.
 */

function Spinner() {
  return (
    <div className="overlay">
        <div className="loading">
            <div className="loading-spinner"></div>
            <div className="loading-spinner"></div>			
        </div>
    </div>
  )
}

export default Spinner
