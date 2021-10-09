import styled from 'styled-components';

export const TestContainer = styled.div`
width : 40%;
 
border-radius :10px;
margin:0 auto;
padding : 10px;
// height:200px;


`
export const TestUl = styled.ul`
 width:100%
`
export const A = styled.a`

 
cursor:pointer;
color:#000;
width:100%;
:hover{
    background-color:#0da;
    
}

:active:{color:red;}
`
export const TestA = styled.li`
background-color : #ded8d8;
text-align:center;
border-radius :5px;
padding:10px 5px;
width :100%;
margin:20px 0px;
border-left :solid 20px #226dfe ;
cursor:pointer;

:hover{
    border:solid 2px #226dfe;
}

`
export const N = styled.div`

background-color:#0aa4d6;
width:100%;
margin-bottom:15px;
height:50px;
padding:10px;
display:flex;
flex-wrap: wrap;
flex-direction: column;
align-content: space-around;
font-size:19px;
color:#fff;
font-weight:bold;
@media screen and (max-width:700px)
{
    font-size:12px;
    height:40px;
    

}

 
`
export const TestB = styled.button
`
background-color : #ded8d8;
text-align:center;
border-radius :5px;
width:40%;
padding:5px;
height:35px;
border:none;
display :block;
margin : 50px auto;
background-color:#226dfe;
color:#fff;
font-family:cursive;
font-size:16px;
cursor:pointer;

:hover{
    background-color:#2b3c64;
}
@media screen and (max-width : 800px)
{
    font-size: 10px;
}

`
export const Hfalse = styled.h6`
background-color: #f13a3a;
padding: 10px;
color:white;
word-break: break-all;
`
export const Htrue = styled.h6`
background-color: #4ecd4e;
padding: 10px;
color: white;
word-break: break-all;
`
export const Result = styled.div`
margin : 0 auto;
text-align:center;
width:60%;
 

padding:20px 0 ;

`
export const Qeustion = styled.div`
background-color:#226dfe;
border-radius :5px;
width:100%;
min-height:50px;
padding:10px 0;
text-trasform : capitalize;
word-warp:break-word;
box-sizing: border-box;
color:white;
font-weight:bold;
font-size:19px;
font-family : monospace;
text-align:center;
margin-bottom:20px;
margin-top:80px;

`
export const Que = styled.div`
background-color: #1d2219;
color: white;
padding: 12px;
font-weight: bold;
word-break: break-all;
display: block;
`
export const All = styled.div`
margin-bottom : 19px;
`
export const Timer = styled.h2`
position : absolute;
top : 146px;
left : 18px;
background-color :#2fd20a;
width : 60px;
color : white;
height:60px;
text-align:center;
margin:0;
padding :16px 0;
font-size:20px;
font-weight:bold;

`
export const Twarn = styled.p`
 margin-top:25px;
 text-align:center;
 color:red;
 text-decoration:underline;
 text-transform: capitalize;
 display:none;      
`
export const TestHeader = styled.h2`

text-align : center;
width : 50%;
background-color :#4c8f65;
margin : 0 auto;
cursor:pointer;
font-size:25px;
text-transform:capitalize;
margin-bottom:80px;
padding : 4px 0;
color :white;
border-raduis :10px;

`