import Banner from '../../components/Banner/Banner'
import coverBan from '../../assets/coverBannerTwo.png'
import UnfoldingText from "../../components/UnfoldingText/UnfoldingText";
import { Link } from 'react-router-dom';

/**
 * Returns a page with a banner and two scrolling inserts.
 * @returns {React.ReactElement} The 'About Us' page.
 */

function AboutUs() {

    const commonPointSection = {
        title : 'The common point between Inuk and Brewdog',
        content :<p>They both contribute to the reduction of carbon emissions. Yes, Brewdog claims to have <Link to={'https://www.brewdog.com/fr/brewdog-environnement'}>a negative carbon footprint.</Link></p>
      }
      const differenceSection = {
        title : 'The difference between Inuk and Brewdog',
        content : <p>It turns out that Inuk's team members would never drink <Link to={'/beer-card/24'}>the End of History</Link> beer, would they?</p>
      }

    return (
        <>
            <Banner coverBanner={coverBan} alt='Inuk website banner' />
            <UnfoldingText contentObject={commonPointSection} />
            <UnfoldingText contentObject={differenceSection} />
        </>
    )
}

export default AboutUs