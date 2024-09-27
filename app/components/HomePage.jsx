import React from 'react'
import CardSlider from './CardSlider'
import Dashboard from './Dashboard'
import GrowCard from './GrowCard'
import { cardsData1 } from '../dataCentre/StaticData'
import Testimonial from './Testimonial'
import TrustedPartner from './TrustedPartner'
import Headlines from './Headlines'
import Services from './Services'
import FeedbackForm from './FeedbackForm'

const HomePage = () => {
  return (
    <div style={{height:'auto'}}>   <Dashboard/>

        <CardSlider cards={cardsData1}/>
        <GrowCard/>
        <Testimonial/>
        <TrustedPartner/>
        <Headlines/>
        <Services/> 
        <FeedbackForm/>

</div>
  )
}

export default HomePage