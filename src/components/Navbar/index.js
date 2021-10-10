import React ,{useState} from 'react';
import {FaBars,FaCreativeCommonsZero} from 'react-icons/fa';
import {Nav , NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,LogOut }  from './NavbarEl';
import { useEffect } from 'react';
import {IconContext} from 'react-icons/lib'
import  usefetch from 'use-http'
import {animateScroll as scroll} from 'react-scroll';
import { Component } from 'react';
import { cleanup } from '@testing-library/react';


const Navbar = ({toggle}) => {
     
    const [scrollNav , setScrollNav] = useState(false)
    
    const changeNav = () => {
        if(window.scrollY >= 80)
        {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
 
    
    const {get,post,response,loading,error}= usefetch('http://localhost:3000');
    const [Username,setUsername]=useState('');
    const [IsLogeed,setIsLogeed]=useState(false);
    const signin="Log In";

    const username = window.localStorage.getItem('username');
    const password = window.localStorage.getItem('password');
    const UserInfo = {username : username , password : password}
    
    useEffect  (async ()=> {
        window.addEventListener('scroll', changeNav)
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
      

    const toggleHome = () => {
        scroll.scrollToTop();
    };

      

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
        
        <>
         
        <IconContext.Provider value={{color : '#fff' }}>
            
        <Nav scrollNav={scrollNav}>
        
            <NavbarContainer >
                <NavLogo to='/'   onClick={toggleHome} >
                    Zer<FaCreativeCommonsZero/>ne
                </NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars  />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="ourtest" smooth={true} duration={500} spy={true} exact='true' offset={-80}>ourtest</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>SignUp</NavLinks>
                    </NavItem>
                </NavMenu>

                <NavBtn>
                      
                     {IsLogeed ?<>
                                  <NavBtnLink  >{Username}</NavBtnLink >
                                  <LogOut onClick={handlelogout}
                                    >LogOut</LogOut >
                     </>:
 
                     <NavBtnLink  to="/LogIn" >Login</NavBtnLink >
                     }
                     </NavBtn>
                 </NavbarContainer>
        </Nav>
                    
        </IconContext.Provider>:
         

        </>
    )
}

export default Navbar
