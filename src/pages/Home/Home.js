import { useState, useEffect } from 'react'
import { fetchData } from '../../services/services'
import Banner from '../../components/Banner/Banner'
import coverBan from '../../assets/coverBanner.png'
import './Home.css'
import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import Button from '../../components/Button/Button'

/**
 * Returns the home page with a banner, 3 clickable filter buttons, 
 * the corresponding display of the beer maps after querying the API 
 * and a button to display a second, much more extensive page. 
 * @returns {React.ReactElement} The Home page.
 */

function Home() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    // Assignment of endpoints to variables and initialization of 
    // a local state 'endpoint' with the endpoint corresponding to 
    // the recovery of the first 50 unsorted beers.
    const unfilteredEndpoint = 'https://api.punkapi.com/v2/beers?per_page=50'
    const abvFilteredEndpoint = abv => `https://api.punkapi.com/v2/beers?abv_gt=${abv}`
    const ebcFilteredEndpoint = ebc => `https://api.punkapi.com/v2/beers?ebc_gt=${ebc}`
    const randomBeerEnpoint = 'https://api.punkapi.com/v2/beers/random'
    const remainingBeersEndpoint = 'https://api.punkapi.com/v2/beers?page=2&per_page=80'
    const [endpoint, setEndpoint] = useState(unfilteredEndpoint)

    // Configuration of the final button animation.
    const [shake, setShake] = useState(false)
    const animate = () => {
        setShake(true)
        setTimeout(
            () => {
                setShake(false)
                setEndpoint(remainingBeersEndpoint)
            }, 2000
        )
    }

    // Dynamic recovery of data on beers: the endpoint being 
    // included in the dependency table, at each change of state 
    // the data are updated with the sorted beers.
    useEffect(
        () => {
            async function getData() {
                setLoading(true)
                let mainData = await fetchData(endpoint)
                if (mainData === undefined) {
                    setError(true)
                    setLoading(false)
                } else {
                    setData(mainData)
                    setLoading(false)
                }
            }
            getData()
        }, [endpoint]
    )
    
    // The factory pattern that generates the beer cards and 
    // associates to each one a specific url to its ID, to allow 
    // a display without having to use props on the beer display page.
    function cardsFactory(name, image, id) {
        let routeId = '/beer-card/'+ id
        return (
            <Link to={routeId} className='card' key={id}>
                <p>{name}</p>
                <img className='coverPicture' src={image} alt={`${name} beer`} />
            </Link>
        )
    }
    return (
        <>
            <Banner coverBanner={coverBan} alt='landscape banner'/>
            <div className='buttonsContainer'>
                {/* The filtering behavior of the buttons lies in 
                changing the state of the endpoint to update the display. */}
                <Button
                    url = {abvFilteredEndpoint(30)}
                    text = 'Want a strong wallop'
                    urlSetter = {setEndpoint} />
                <Button
                    url = {ebcFilteredEndpoint(100)}
                    text = 'For dark ale thirst'
                    urlSetter = {setEndpoint} />
                <Button
                    url = {randomBeerEnpoint}
                    text = 'A random booze'
                    urlSetter = {setEndpoint} />
            </div>
            {error && (<div>Unable to access network data, please try reloading the page later.</div>)}
            {loading && (<Spinner />)}
            {/* If the loading of the data has been successful, 
            the spinner disappears and we iterate on the data 
            to display the beer cards */}
            {!error && (
                <div id='cardsContainer'>
                    {data.map((oneBeer) => (
                        cardsFactory(oneBeer.name, oneBeer.image_url, oneBeer.id)
                    ))}
                </div>
            )}
            <div className='buttonsContainer'>
                    <button 
                        onClick = {animate} 
                        className = {shake ? `shake searchButton` : 'searchButton'
                    }>
                        I WANT MORE BEERS
                    </button>
            </div>
        </>
    )
}

export default Home 