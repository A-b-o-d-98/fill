import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.production.min';
import usefetch from 'use-http'
import Home from '../../pages/index' 
import { FaCreativeCommonsZero } from 'react-icons/fa';

import { Container,Icon,Form,FormH1,FormLabel,FormInput ,FormContent, FormButton,Text,FormWrap } from './LogInEl'
 
const dotenv = require("dotenv");


dotenv.config();
const LogIn = () => {
    
     
    const [UserName,setUsername]=useState('');
    const [Password,setPassword]=useState('');
    const [isRegistered,setisRegistered]=useState(false)
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    
    
    const {get,post,response,loading,error}=usefetch(process.env.PORT);

        const handlePassword=(event)=>{
            setPassword(event.target.value)
        
        }

        const handleUsername=(event)=>{
            setUsername(event.target.value)
            
        }
        const handleSubmit=(event)=>{
                    
            event.preventDefault();
            const userInfo = {username:UserName,password:Password};
            const x = post('/login',userInfo)
            x.then((res)=>{
                if(res.condOfuser&&res.condOfpassword)
                 { 

                    
                    window.localStorage.setItem('username',res.username)
                    window.localStorage.setItem('password',res.password)

                    var after = window.localStorage.getItem('afterLogin');
                    if(after=='/ourtest') 
                    {  
                        window.localStorage.removeItem('afterLogin')
                        window.location = '/ourtest'
                    }
                    else 
                    if
                    (after=='/services')
                     { 
                        window.localStorage.removeItem('afterLogin')
                        window.location = '/services'
                     }
                     else
                     window.location = '/'
                    
                }
                else 
                if(!res.condOfuser)
                   username.style.display = "block"

                if(!res.condOfpassword)
                   password.style.display = "block" 
                 
                    
                })
            
            
                
                            
        }    


        
           return (
        <>
       
        
         <Container id="in" >
          <FormWrap>
              <Icon to="/">Zer<FaCreativeCommonsZero/>ne</Icon>
              <FormContent>
              
                  <Form action="" onSubmit={handleSubmit}>
                      <FormH1 style={{borderRadius:"4px",padding:"7px",backgroundColor:"#09c074"}}>Log In To Your Acount </FormH1>
                      <FormLabel  htmlFor='for'> UserName</FormLabel><span id="username"style={{display:"none" , color:"red"}}>username is invalid </span>   
                      <FormInput  required placeholder="Enter Your UserName " onChange={handleUsername} onClick={()=>{
                        if(username!=null)  username.style.display = "none "}} />
                      
                      <FormLabel htmlFor='for'>Password</FormLabel><span id="password" style={{display:"none" , color:"red"}}>password is invalid</span>
                      <FormInput type='password'required placeholder="Enter Your Password " onChange={handlePassword}
                      onClick={()=>{
                        if(password!=null) password.style.display = "none  "}} />
                      <FormButton type='submit'>Continue</FormButton>
                      <Text >Forget password</Text>

                  </Form>
              </FormContent>


          </FormWrap>    
         </Container>   

        </>
    )
}

export {LogIn}




