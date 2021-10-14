import styled from 'styled-components'
import {Link} from 'react-router-dom';


export const Container = styled.div`
 min-height:400px;

  
 z-index:0;
 overflow:hidden;
 background: linear-gradient(
     108deg,
     rgba(1,147,86,1) 0%,
     rgba(10,201,122,1) 100%
 );
 @media screen and (max-width : 480px)
 {
      
 }

`;

export const FormWrap = styled.div`
 height :100%;



 @media screen and (max-width : 480px)
 {
 
     
      
 }


`;

export const Icon = styled(Link)`
 margin-left:32px;
 text-decoration : none;
 color:#fff;
 font-weight:700;
 font-size:32px;

 @media screen and (max-width : 480px)
 { 
      
 }


`;
export const FormContent = styled.div`
 height :95%;
 display: flex;
 flex-direction:column;
 justify-content:center;


 @media screen and (max-width : 480px)
 {
   
 }


`;


export const Form = styled.form`
 background:#010101;
 max-width:450px;
 height:auto;
 width:100%;
 z-index:1;
 display:grid;
 padding:80px 32px;
 margin: 0 auto;
 border-radius:4px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.9);
 
 @media screen and (max-width : 480px)
  {
 }



`;



export const FormH1 = styled.h1`
 margin-bottom: 20px;
 color:#fff;
 padding:10px;
 font-size:20px;
 font-weight:400;
 text-align: center;
 margin-top:-30px;
 background-color :#01bf71;
 border-radius:4px;
`;


export const FormLabel = styled.label`
 margin-bottom: 6px;
 color:#fff;
 font-size:14px;

`;


export const FormInput = styled.input`
 padding:16px 16px;
 outline:none;
 margin-bottom: 20px;
 border: none;
 border-radius:4px;
 
`;


export const FormButton = styled.button`
 background:#01bf71;
 padding:10px 0px;
 margin-bottom: 12px;
 border: none;
 border-radius:4px;
 color:#fff;
 font-size:20px;
 cursor:pointer;
 
`;

export const Text = styled.span`
 text-align:center;
 margin-top: 20px;
 color:#fff;
 font-size:20px;
 
`;
