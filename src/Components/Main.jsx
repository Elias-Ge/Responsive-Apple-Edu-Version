import React from 'react'
import UnicefSection from './Alert/Unicef_Section'
import AppleCardTV from './BodySection/AppleCardTV'
import IpadairFitness from './BodySection/IpadairFitness'
import Iphone13 from './BodySection/Iphone13'
import Iphone13ProWatch from './BodySection/Iphone13ProWatch'
import MacBookAir from './BodySection/MacBookAir'
import MacBookPro13 from './BodySection/MacBookPro13'
import IndividualCarousel from './CarouselImages/IndividualCarousel'
import YouTubeVideo from './YouTubeVideo'

const Main = () => {
    return (
        <div>
            <UnicefSection />
            <div className="body-section">
                <MacBookAir />
                <MacBookPro13 />
                <Iphone13 />
                <Iphone13ProWatch />
                <IpadairFitness />
                <AppleCardTV />
            </div>
            <IndividualCarousel />
            <YouTubeVideo />
        </div>
    )
}

export default Main