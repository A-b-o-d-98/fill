import React from 'react'
import Icon1 from '../../image/2.png'
import Icon2 from '../../image/svg5.svg'
import Icon3 from '../../image/1.png'
import { FaCreativeCommonsZero } from 'react-icons/fa';

import {ServicesContiner,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP,Icon} from './ServicesEl'

const Services = () => {
    
    return (
        <>
        <Icon to="/"> Zer<FaCreativeCommonsZero/>ne</Icon>
            
        <ServicesContiner id="services">
            

            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Certificate</ServicesH2>
                    <ServicesP>We Offer A Reliable , Inexpensive Certificate According To Another Companies</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Exams</ServicesH2>
                    <ServicesP>We Offer Multi Forms Of Free Exams , That Includes Almost Programming Knowledgs Levels</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon3} style={{ height: '142px',width:'150px'}}/>
                    <ServicesH2>Reliability</ServicesH2>
                    <ServicesP>We guarantee the reliability of the questions and the accuracy of the answers provided to ensure that we get the correct information</ServicesP>
                </ServicesCard>


            </ServicesWrapper>
        </ServicesContiner>
        </>
    )
}

export default Services
