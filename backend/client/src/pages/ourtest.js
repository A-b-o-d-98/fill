import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import Quiz from '../components/Quiz/Quiz';
import OurTest from '../components/OurTest/OurTest';
import Footer from '../components/Footer'
import usefetch from 'use-http'
import { useState } from 'react'
import {useEffect} from 'react'
import Home from '../pages'


const OurTestPage = () => {
     
    
    return (
      
        
          <>
               <ScrollToTop />
               < OurTest/>  
               <Footer/>

        </>
    )
}
 

export default OurTestPage;