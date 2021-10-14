import React, { useState } from 'react'
 

import {InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine ,Heading,Subtitle,BtnWrap,ImgWrap,Img,InfoBtnLink}  from './InfoEl'
import usefetch from 'use-http'
import { useEffect } from 'react';
import icon1 from '../../image/svg6.svg'
import icon4 from '../../image/1.svg'
import icon3 from '../../image/svg5.svg'
import icon2 from '../../image/svg2.svg'



 

const InfoSec = ({id,buttontag,lightBg,lightText,lightTextDesc,topLine,headline,description,buttonLabel,img,alt,dark,primary,darkText,imgStart,dark2}) => {
  
  const {get,post,response,loading,error}=usefetch('http://localhost:3000');

  
    
  
  
  useEffect  (async ()=>{


   
      

         },[])
     
       return (
        <> 
          <InfoContainer lightBg={lightBg} id={id} >
           <InfoWrapper>
              <InfoRow imgStart={imgStart} > 
               <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText} >{headline}</Heading>
                    <Subtitle darkText={darkText} >{description}</Subtitle>
                    <BtnWrap> 
                    
                    <InfoBtnLink
                     to={buttontag}
                  
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1: 0}
                    dark2={dark2 ? 1 : 0 }
                    >{buttonLabel}</InfoBtnLink>
                     
                    </BtnWrap>    
                    
                </TextWrapper>
               </Column1>
               <Column2>
               <ImgWrap>
                 {
                   id == 'about' ? <Img src={icon1} alt={alt}  /> :<></>
                 }
                 {
                   id == 'services' ?<Img src={icon2} alt={alt}  /> :<></>
                 }
                 {
                   id == 'ourtest' ?<Img src={icon3} alt={alt}  /> :<></>
                 }
                 {
                   id == 'signup' ?<Img src={icon4} alt={alt}  /> :<></>

                 }
                 
{/*                   
                 <Img src={img} />
                  */}
                  
                 
               </ImgWrap>
               </Column2>
               </InfoRow>
               </InfoWrapper>    
          </InfoContainer> 
          
        </>
    )
}

export default InfoSec
