import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
 background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
 height: 80px;
 margin-top: -107px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 10;

 @media screen and (max-width:960px)
 {
     transition : 0.8s all ease;
 }

`;

export const NavbarContainer = styled.div`
 height: 80px;
 display: flex;
 justify-content: space-between;
 padding: 0 24px;
 width: 100%;
 z-index: 1;
 max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
 color:#fff;
 justify-self: flex-start;
 cursor: pointer;
 font-size:29px;
  display: flex;
 align-items: center;
 margin-left: 24px;
 font-weight: bold;
 text-decoration: none;
`;

export const MobileIcon = styled.div`
 display:none;

 @media screen and (max-width: 768px)
 {
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer;
     color:#fff;
 }
`


export const NavMenu = styled.ul`
 display : flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: -22px;

 @media screen and (max-width: 768px)
 {
    display: none; 
 }
`

export const NavItem = styled.li`
 height : 80px;
`

export const NavLinks = styled(LinkS)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding :0 1rem;
 height: 100%;
 cursor: pointer;   


 &.active{
     border-bottom: 3px solid #01bf71;
 }
`;

export const NavBtn = styled.nav`
 display: flex;
 align-items: center;

 @media screen and (max-width: 768px)
 {
     display:none;
 }

`

export const LogOut = styled.button`
border-radius: 50px;
background: #2c3136;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
outline: none;
margin-left : 8px;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
 
 &:hover {
     transition: all 0.2s ease-in-out;
     background: #fff;
     color: #010606;
 }



`

export const NavBtnLink = styled(LinkR)`

        border-radius: 50px;
        background: #01bf71;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010686;
        font-size: 16px;
        outline: none;
        border:none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        
            &:hover {
                transition: all 0.2s ease-in-out;
                background: #fff;
                color: #010606;
 }
`