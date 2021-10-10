//import React from 'react'
import {SideH3,SidebarContainer,Icon ,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWarp,SidebarRoute,LogOut} from './SideBarEl';
import React ,{useState} from 'react';
import {FaBars,FaCreativeCommonsZero} from 'react-icons/fa';
//import {Nav , NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,LogOut }  from './NavbarEl';
import { useEffect } from 'react';
import {IconContext} from 'react-icons/lib'
import  usefetch from 'use-http'
import {animateScroll as scroll} from 'react-scroll';
import { Component } from 'react';
import { cleanup } from '@testing-library/react';
const Sidebar = ({isOpen , toggle} ) => {
    // const d= (event)=>{
    //    window.location = event.target.name;    
    // }

   
    const {get,post,response,loading,error}= usefetch('http://localhost:3000');
    const [Username,setUsername]=useState('');
    const [IsLogeed,setIsLogeed]=useState(false);
    const signin="Log In";

    const username = window.localStorage.getItem('username');
    const password = window.localStorage.getItem('password');
    const UserInfo = {username : username , password : password}
    
    useEffect  (async ()=> {
        //window.addEventListener('scroll', changeNav)
        if(username && password){
            
          const y = post('/islogged',UserInfo)
           y.then((res)=>{ 

               if(res) {
                setUsername(username);
                setIsLogeed(true)
               
                

               }  
               else{
                   window.localStorage.removeItem('username')
                   window.localStorage.removeItem('password')
                   window.location = '/'
               }
              })  
               
        }
         
        
        }
    
        
                 

    ,[])
      
     const handlelogout = ()=>
     {   
          window.localStorage.removeItem('username')
          window.localStorage.removeItem('password')
          window.location='/'

         if(window.localStorage.getItem('toTest'))
         {
            window.localStorage.removeItem('toTets');
         }
     }
        

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink  to="about"  onClick={toggle }>
                    About
                </SidebarLink>
                <SidebarLink to="ourtest" onClick={toggle}>
                  Ourtest
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Services
                </SidebarLink>
                
                <SidebarLink to="signup" onClick={toggle}>
                SignUp
                </SidebarLink>
 
              </SidebarMenu> 
              {/* <SideBtnWarp>
              <SidebarRoute to='login' >LogIn</SidebarRoute>
              </SideBtnWarp> */}
              
              <SideBtnWarp>
                      
                      {IsLogeed ?<>
                                   <SidebarRoute onClick={handlelogout}>{Username}</SidebarRoute >
                                   {/* <LogOut onClick={handlelogout}
                                     >LogOut</LogOut > */}
                      </>:
  
                      <SidebarRoute  to="login" >Login</SidebarRoute >
                      }
                      </SideBtnWarp>
                      {IsLogeed ?
                      <SideH3>
                        
                          If you Click on User name you will be Logout
                        
                      </SideH3>
                      :null}

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
