import React from 'react'
import { useState } from 'react'
import Icon1 from '../../image/svg4.svg'
import Icon2 from '../../image/svg5.svg'
import Icon3 from '../../image/svg6.svg'
import Icon4 from '../../image/4.png'
import { useEffect } from 'react';
import usefetch from 'use-http'
import Test from '../Test/test'
import { FaCreativeCommonsZero } from 'react-icons/fa';

import {Go,ServicesContiner,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP,Icon} from './OurTestEl'

const OurTest = () => {
    
    

    const  username = window.localStorage.getItem('username'); 
    const  password = window.localStorage.getItem('password');
    const {get,post,response,loading,error}=usefetch('http://localhost:3000');

    const handletest = (event) =>
    {
           const type = event.target.id;
           const name = event.target.name;

           window.localStorage.setItem('testType' , type)

           window.localStorage.setItem('testname',name) 
        
        if(username&&password){

            const x = post('/islogged',{username : username,password:password }).then((result)=>
                {   result.mess ? window.location = 'test' :
                                  window.location = 'signup'
                })


        }

         else  
             window.location = 'signup'
             
    }


         

    useEffect  (async ()=> {
         
        
    }   
                     

    ,[])
    return ( 
        <> 
                 
        <Icon to="/">Zer<FaCreativeCommonsZero/>ne</Icon>
            
        <ServicesContiner id="services">
            

            <ServicesH1>Beginner Level</ServicesH1>

            <ServicesWrapper>
                <ServicesCard    >
                    
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2 >basics_one</ServicesH2>
                    <ServicesP>An exam that includes questions about the simple basics of the Python language - (variables definition , dataType , condition statements)</ServicesP>
                    <div>
                    <Go onClick={window.location = 'test'} name='basics_one' id="withlimit" style={{marginRight:"15px"}}> Test With Limit</Go>
                    <Go onClick={handletest} name='basics_one' id="withoutlimit"> Test Without Limit</Go>
                    </div>
                </ServicesCard>
                
                <ServicesCard  >
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>basics_two</ServicesH2>
                    
                          <ServicesP>An exam that includes questions are more detailed fields in Python language - (String , lists and dictionary , tuples and sets , variable scops , Files)</ServicesP>
                    <div>
                    <Go onClick={handletest} name='basics_two' id="withlimit" style={{marginRight:"15px"}}> Test With Limit</Go>
                    <Go onClick={handletest} name='basics_two' id="withoutlimit"> Test Without Limit</Go>
                    </div>
                </ServicesCard>
                
                {/* <ServicesCard   to="/quizup">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>B3</ServicesH2>
                    <ServicesP>Here you will be tested in all the simple basics, starting from zero to the end of the basics</ServicesP>
                </ServicesCard > */}
                </ServicesWrapper>
                <ServicesH1>Advanced Level</ServicesH1>


                <ServicesWrapper style={{display:'block',maxWidth:"1200px", width:"100%" , height:"30%"}}>


                <ServicesCard   style={{width:"65%" , height:"100%" , margin:"0 auto"}}>
                
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>OOP</ServicesH2>
                    
                    
                    <ServicesP>An exam that includes  questions about the main concepts of object oriented programming in Python   class , object , polymorphism ..</ServicesP>
                    <div>
                    <Go onClick={handletest} name='basics_two' id="withlimit" style={{marginRight:"15px"}}> Test With Limit</Go>
                    <Go onClick={handletest} name='basics_two' id="withoutlimit"> Test Without Limit</Go>
                    </div>
                </ServicesCard>
                
                {/* <ServicesCard  to="/quizup">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>A2</ServicesH2>
                    <ServicesP>An exam that includes  questions in the all basics within some axes of the Advance Python language</ServicesP>
                    <Go onClick={handletest} name='general'> ClickHere</Go>
                </ServicesCard> */}
{/*                 
                <ServicesCard  to="/quizup">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>A3</ServicesH2>
                    <ServicesP>Here you will be tested in all aspects of the Python language in the basics and advanced</ServicesP>
                </ServicesCard> */}


            </ServicesWrapper>

            <ServicesH1>General Level</ServicesH1>
            <ServicesWrapper  style={{display:'block',maxWidth:"1200px", width:"100%" , height:"40%"}}>
            <ServicesCard  style={{width:"65%" , height:"100%" , margin:"0 auto"}}>
                
                <ServicesIcon src={Icon4} />
                <ServicesH2>General</ServicesH2>
                
                <ServicesP>An exam that includes questions about basics and advanced fields of Python language , questions are choosed randomly and regularly from the all fields </ServicesP>
                <div>
                    <Go onClick={handletest} name='general' id="withlimit" style={{marginRight:"15px"}}> Test With Limit</Go>
                    <Go onClick={handletest} name='general' id="withoutlimit"> Test Without Limit</Go>
                    </div>
            </ServicesCard>
            
            </ServicesWrapper>
        </ServicesContiner>
    
</>
)
}

export default OurTest
