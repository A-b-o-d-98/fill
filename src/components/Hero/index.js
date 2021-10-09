import React , {useState} from 'react';
import Video from '../../video/2.mp4';
import {HeroContainer ,HeroBg , VideoBg , HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight,HeroBtnLink} from './HeroEl'
import { Button } from '../ButtonEl';
import { Link } from 'react-scroll';

const Hero = () => {
    const [hover , setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id='home' >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

            </HeroBg>
            <HeroContent>
                <HeroH1>Are you ready!!</HeroH1>
                <HeroP>
                   Sign Up now to change your opinion 
                </HeroP>
                <HeroBtnWrapper>
                    <HeroBtnLink  onMouseEnter={onHover} onMouseLeave={onHover} 
                    to="/signup"
                    primary='true'
                    dark='true'
                    >
                        Get Stated {hover ? <ArrowForward /> : <ArrowRight/>}
                    
                    </HeroBtnLink>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
