import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {Link as LinkR } from 'react-router-dom'




export const ServicesContiner = styled.div`
 height : 1500px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background : #010606;

 @media screen and (max-width : 768px)
 {
     height:2200px;
 }

 @media screen and (max-width : 480px)
 {
     height:2044;
 }
 
 @media screen and (max-width : 1100px)
 {
     height:2044; ;
 }

`

export const ServicesWrapper= styled.div`
 max-width: 1000px;
 margin: 20px auto ;
 display: grid;
 grid-template-columns: 2fr 2fr ;
 align-items: center;
 grid-gap: 17px;
 padding : 20 50px;
 
 @media screen and (max-width : 1000px)
 {
    grid-template-columns: 1fr 1fr ;
 }

@media screen and (max-width : 768px)
 {
    grid-template-columns: 1fr ;
    padding : 0 20px;
     
 }

`
export const Go = styled.button`
border-radius:2px;
border:none;
color : white;
margin-top:45px;
padding : 8px;
 cursor : pointer ;
 background-color:green;
 
 :hover{
    transform : scale(1.22);
    transition: all 0.3s ease-in-out;   
 }

 @media screen and (max-width : 500px){
    padding : 4px;
 }
`
export const ServicesCard = styled(LinkR)`
 background:#fff;
 display: flex;
 flex-direction:column;
 justify-content: flex-start;
 align-items:center;
 border-radius:10px;
 max-height: 400px;
 padding:20px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;
 

 &:hover {
     transform : scale(1.02);
     transition: all 0.2s ease-in-out;
     cursor:pointer;
 }


`
             

export  const  ServicesIcon = styled.img`
 height: 160px;
 width:160px;
 margin-bottom:10px;
 @media screen and (max-width : 1090px){
 
    height: 120px;
    width:120px;
 
 }
 @media screen and (max-width : 633px){
    height: 100px;
    width:100px;

 }
`

export const ServicesH1 = styled.h1`
 font-size:2.5rem;
 color:#fff;
 margin-bottom:26px;
 
 
 margin-top:64px;

 @media screen and (max-width : 480px)
 {
     font-size: 2rem;
 }

`

export const ServicesH2 = styled.h2`
 font-size:1rem;
 font-weight: 800;
 margin-bottom:10px;

 `

 export const ServicesP = styled.p`
 font-size:1rem;
 text-align:center;
 color:black;
 @media screen and (max-width : 633px){
    font-size :13px;
}

 `
 
export const Icon = styled(Link)`
margin-left:32px;
margin-top:32px;
text-decoration : none;
color:#f12250;
font-weight:700;
font-size:32px;

@media screen and (max-width : 480px)
{ 
    margin-left:32px;
    margin-top:32px;
}


`;

