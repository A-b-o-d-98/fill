import React from 'react'
import { useState } from 'react'
import usefetch from 'use-http'
import { FaCreativeCommonsZero } from 'react-icons/fa';

import { Container,Icon,Form,FormH1,FormLabel,FormInput ,FormContent, FormButton,Text,FormWrap } from './SignupEl'
const dotenv = require("dotenv");


dotenv.config();

const SignUp = () => {
    const {get,post,response,loading,error}=usefetch(process.env.PORT ||'http://localhost:3000');
    const [UserName,setUserName]=useState('');
    const [Password,setPassword]=useState('');
    const [Email,setEmail]=useState('');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
    
    
    const handleOne=(event)=>{
        setUserName(event.target.value);
    }

    const handleTwo=(event)=>{
        setEmail(event.target.value);
    }

    
    const handleThree=(event)=>{
        setPassword(event.target.value);
    }
   
     
    const handleSubmit= async (event)=>{

        event.preventDefault();
        
        const userInfo = {username:UserName,email:Email,password:Password};
        const x =post('/signup',userInfo)
        x.then((res)=>{
            if(res.mess)  
                window.location="/login" 
            else{
                if(!res.condOfuser)
                    username.style.display = "block";
                if(!res.condOfemail)
                    email.style.display = "block";
                
               
            //    window.location='signup'
            }})
    }
    

    return (
        <>
         <Container id="in" >
          <FormWrap>
              <Icon to="/">Zer<FaCreativeCommonsZero/>ne</Icon>
              <FormContent>
                  <Form action="#" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
                      
                      <FormH1>Sign Up to Our Website</FormH1>
                      <FormLabel htmlFor='namedInput'>user name</FormLabel>
                      <span id="username"style={{display:"none" , color:"red"}}>this username is already  in use</span>
                      <FormInput placeholder="Username .." type='name'required onChange={handleOne} onClick={()=>{
                          if(username!=null) 
                            username.style.display = "none "
                      }} />
                      
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <span id="email"style={{display:"none" , color:"red"}}>this email is already in use</span>
                      <FormInput placeholder="Email .." type='email'required onChange={handleTwo}  onClick={()=>{
                           if(email!=null) 
                             email.style.display = "none  "
                      }} />
                      
                      <FormLabel htmlFor='for'>Password</FormLabel>
                      <FormInput placeholder="Password .." type='password'required onChange={handleThree}  />
                      <FormButton type='submit' >Continue</FormButton>
                      <FormLabel htmlFor='for'>Are You Member ?</FormLabel>
                      <FormButton style={{backgroundColor:"#55ccc5",color:"#000"}} type='submit' onClick={()=>{window.location='/login'}} >LogIn</FormButton>
                      
                  </Form>
                 </FormContent>


          </FormWrap>    
         </Container>   
        </>
    )
}

export default SignUp
