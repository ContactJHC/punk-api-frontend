import './Beer.css'
import UnfoldingText from '../../components/UnfoldingText/UnfoldingText'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { fetchOneBeerData } from '../../services/services'
import Spinner from '../../components/Spinner/Spinner'
import noBeer from '../../assets/noBeerImgFound.png'
import LiElement from '../../components/LiElement/LiElement'

/**
 * Returns the page corresponding to the detailed description of a beer thanks 
 * to its id retrieved from the URL: an image of the beer, its chemical 
 * characteristics and specific properties.
 * @returns {React.ReactElement} The presentation page of the beer whose ID is retrieved from the URL.
 */

function Beer() {
    const identifiant = useParams()
    const navigate = useNavigate()
    const [oneBeerData, setOneBeerData] = useState({})
    const [loading, setLoading] = useState(false)

    // Fetching of all the data of the beer that we want to display.
    useEffect(
        () => {
            const oneBeerId = identifiant.id
            async function getTheData() {
                setLoading(true)
                const theData = await fetchOneBeerData(oneBeerId)
                if (theData === undefined || oneBeerData.length === 0) {
                    navigate('/404')
    
                } else {
                    setOneBeerData(theData[0])
                    setLoading(false)
                }
            }
            getTheData()
        }, [])
    
    return ( 
    (loading) ? (<div><Spinner /></div>) : (
        <>
            <div id='headerContainer'>
                <div id='nameAndTagline'>
                    <div id='name'>
                        {oneBeerData.name}
                    </div>
                    <div id='tagline'>
                        {oneBeerData.tagline}
                    </div>
                </div>
            </div>
            <section id='imageContainer'>
                <div className='mobileImageContainer'>
                {/* In case the image corresponding to the beer is 
                missing in the API, we display an image of beer stored in 'assets'. */}
                {oneBeerData.image_url ? (
                    <img id='image' src={oneBeerData.image_url} alt={`${oneBeerData.name}`} />
                ) : (
                    <img id='image' src={noBeer} alt='Bourbon Baby' />
                )}
                </div>
                <div id='specsContainer' >
                    <ul>
                        <LiElement type='First brewed' content={oneBeerData.first_brewed} />
                        <LiElement type='ABV' content={oneBeerData.abv} />
                        <LiElement type='EBC' content={oneBeerData.ebc} />
                        <LiElement type='IBU' content={oneBeerData.ibu} />
                        <LiElement type='SRM' content={oneBeerData.srm} />
                        <LiElement type='PH' content={oneBeerData.ph} />
                        {/* The food pairing key/attribute is not necessarily present in the recipes: 
                            if yes, it is an array on which we iterate to display the elements.  */}
                        {oneBeerData.food_pairing && 
                            (<LiElement 
                                type='Food pairing' 
                                content={
                                    <ul>
                                        {oneBeerData.food_pairing.map((food, index) =>
                                            <li key={`${food}${index}`}>{food}</li>
                                        )}
                                    </ul>} 
                            />)
                        }
                    </ul>
                </div>
            </section>
            <div id='containerDescription'>
                <div id='containerOne'>
                    <UnfoldingText contentObject={
                        {
                            title : 'Description',
                            content : oneBeerData.description
                        }
                    } />
                </div>
                <div id='containerTwo'>
                    <UnfoldingText 
                        contentObject={
                            {
                                title: 'Tips',
                                content : oneBeerData.brewers_tips
                            }
                    } /> 
                </div>
            </div>            
        </>
    ))
}

export default Beer