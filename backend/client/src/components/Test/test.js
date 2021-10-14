import React, { useState } from 'react'
import {useEffect} from 'react'
import  usefetch from 'use-http'
import './Quiz.css';
import {Button} from '../ButtonEl'
import { FaCreativeCommonsZero } from 'react-icons/fa';

import {N,Htrue,Hfalse,Twarn,All,TestUl,Que,TestA,TestContainer,TestHeader,Qeustion,TestB,Result,Timer} from './testEl'
import Navbar from '../Navbar/index'
 
const dotenv = require("dotenv");


dotenv.config();
const Test = () =>
{
  const {get,post,response,loading,error}= usefetch(process.env.PORT );
  const [data,setdata] = useState([]);
  const [step,setstep] = useState(0);
  const [PrevTests,setPrevTests] = useState() 
  const [cond,setcond] = useState();
  const [ANS,setANS] =useState([]);
  const [NumsOfTrue,setNumsOfTrue]=useState(0)
  const [Anss,setAnss]   =useState([]); 
  const [x,setx] = useState(45);
  var arr = [1];
  const [limited,setlimited] = useState()
  const [Truee,setTruee] = useState(false); 
  const [co,setco] = useState(false);
  const [Logged,setLogged] = useState();
  const A = 'A'


const DefaultColor = ()=>{

  const ils = document.getElementsByClassName('colored')
 for(var i = 0 ; i < ils.length ; i++)
     {  
      ils[i].style.backgroundColor='#ded8d8'
      ils[i].style.color="#000"
       
     }
}

useEffect  (async ()=> {

  const islimited = window.localStorage.getItem('testType') == 'withlimit'
  setlimited(islimited)
  const username = window.localStorage.getItem('username');
  const password = window.localStorage.getItem('password');
  const UserInfo = {username : username , password : password}

  const a = post('/islogged',UserInfo)
     await a.then((res)=>{ 
          res.mess ? setLogged(true) : setLogged(false)
        
      })
     
 

    var y ;
    var z ;
     
        const TableName = window.localStorage.getItem('testname');
        const x = post('/test',{TableName:TableName});
        await x.then((result)=>{
         
              y = result.data;
              z = result.mess;
            
    }) 
    
    if(z)
    setdata(y)    
   
    else 
       window.location = '/'

       
     

},[])

const f =()=>{
      const btn = document.getElementById('btn');
      btn.style.display = "none";
      const user = window.localStorage.getItem('username');
      const result =  ((NumsOfTrue/data.length)*100).toFixed();
      const testName = window.localStorage.getItem('testname');
      const x = post('/test/res' , {user : user , result : result , testName : testName });
    
      x.then((res)=>{

            console.log(res)
      })
      
}


const handlenext = () =>
{ 
    
  const ils = document.getElementsByClassName('colored')
  var colored ;
  for(var i = 0 ; i < ils.length ; i++){
    if(ils[i].style.backgroundColor.length==16)
    {   
  
        colored = true;
        var t = ils[i].innerHTML;
        Anss[step] = t.trim();
     
     }
     }
  
  

  
const tt = document.getElementById('t')
const warn = document.getElementById('warn');
if(step < data.length-1) {
 if(colored){
  setTruee(true)
     setTimeout(()=>{setstep(step+1)},800) 
   
      
 const ils = document.getElementsByClassName('colored')
 DefaultColor()}
else{
     
     warn.style.display = "block";
}



}
if(step == data.length-1 && !colored)
warn.style.display = "block";


  
 
   if(step == data.length-1 && colored) {
{  const next = document.getElementById('next'); 
   const result = document.getElementById('result'); 
   const container = document.getElementById('container');
   const header = document.getElementById('header');
   const cont = document.getElementById('cont')
    // if(ul.style.display == 'block')
        container.style.display = 'none';
        next.style.display='none';
        result.style.display='block';
        cont.style.display = "block"

   }
   
 }         


  
}
         
  
   const letsgo =async ()=>{

    const Username = window.localStorage.getItem('username') 
    const date = post('/islogged' , {desc:"times of test" , username : Username });
    


    var an = window.localStorage.getItem('answers')
    an ? window.localStorage.removeItem('answers') : console.log()
    var testname = window.localStorage.getItem('testname');
    if(testname!='undefined'&&testname!='')
       setcond(true)
    else 
       {
         window.localStorage.removeItem('testname')
         window.location = 'ourtest'
       }
   }  
   

   const printv = (e)=>{
      
    //  Answers[step]=e.target.innerHTML;
    //  console.log(Answers)

     const ils = document.getElementsByClassName('colored')
     const warn = document.getElementById('warn');
     warn.style.display = "none"
       
      for(var i = 0 ; i < ils.length ; i++)
       {  
        ils[i].style.backgroundColor='#ded8d8'
        ils[i].style.color="#000"
    
         
      }
         
       
   
      e.target.style.backgroundColor='#0da';
      e.target.style.color="#fff"

   }
   const handleresult = ()=>{
    //  const ans = window.localStorage.getItem('answers')
    //  if(ans){
    //   Answers =ans;
    //   Answers =ans.split(',');
    //   const finish = document.getElementById('finish')
    //      finish.style.display="block"
    //      setANS(Answers)
    //      var x = data;
    //      var count=0;
    //      for(var i = 0 ; i < data.length ; i++)
    //      { 
    //          if(Answers[i]==x[i].correct_answer)
    //             count++;     
    //      } 
         
    //  } 
    
    // setNumsOfTrue(count)
    var x = data;
    let count =0 ;
     
    for(var i = 0 ; i < data.length ; i++)
         { 
             if(Anss[i] == x[i].correct_answer)
               {
             count++;
             
          } } 
          
     
          
          setNumsOfTrue(count)
 
      const finish = document.getElementById('finish')
      if(finish.style.display=="block")
         finish.style.display="none" 
      else
         finish.style.display="block"

        console.log(Anss[0].length)
        console.log(data[0].correct_answer)
        console.log(data[0].correct_answer == Anss[0])
    }
const hello = ()=>{
  const next = document.getElementById('next'); 
   const result = document.getElementById('result'); 
   const container = document.getElementById('container');
   const cont = document.getElementById('cont');
    // if(ul.style.display == 'block')
        container.style.display = 'none';
        next.style.display='none';
        result.style.display='block';
        cont.style.display='block';
}
   const getResult = async()=>{
    
    const i = document.getElementById('prevresult');
    if(i.style.display == 'none') {
      i.style.display = 'block'
    }
    else

    i.style.display = 'none'
       

    const username = window.localStorage.getItem('username');
    const result =  ((NumsOfTrue/data.length)*100).toFixed()
    const UserInfo = { username : username , result :result }
     

         const z  = post('/test/results',UserInfo)
         await z.then((res)=>{

                console.log(res.testsInfo)
                setPrevTests(res.testsInfo) 


         })
           

        //  console.log("result is " , result , PrevTests[0].result)

   }
  return(

<> { cond ?
 
  
   
  <>
  <N>
 <span onClick={()=>{window.location = "/"}} style={{cursor:"pointer" , textDecoration:"underline"}} >  Zer<FaCreativeCommonsZero/>ne
</span>
 <span style={{textDecoration:"underline"}}  id="header">{window.localStorage.getItem('testname')} Exam</span>
 <span style={{textDecoration:"underline"}}>{window.localStorage.getItem('username')}</span>
 </N>
 <TestContainer id="container">
   { limited ?
     <Timer id='t'>
       
  { 
    
  arr.every((ind)=>{
     if(co) return false

    
    setTimeout(async() => {


    const next = document.getElementById('next');
     if(Truee){
       
      setx(45)  

         setTruee(false);
    }
    else
     { 
       
       if(x==1){
        setx(45);
        if(step < data.length-1){
          DefaultColor()
         setstep(step+1);}
        if(step == data.length-1){
          //  handlenext();
          hello()  
          setco(true)             
        }
        
        }
        else {setx(x-1);
             console.log("STILL .. ")
             }

          
            }         
  }, 1000);
  const t = document.getElementById('t');
  if(t!=null){
  if(x>30){t.style.backgroundColor ="#2fd20a"; }
       else if(x<=30 && x>15  ){t.style.backgroundColor ="#dab211"}
       else {t.style.backgroundColor ="#f70c0c";} 
  }
})
                
          }
       
          {x}</Timer> :<></> }
     <Qeustion>{data[step].qusetion}</Qeustion>
     <TestUl> 
           
     {data[step].incorrect_answer.map((element,index)=> {
       return(
         <TestA className='colored' onClick={printv} key ={index} > {element} </TestA>
         
         )
     })}

   </TestUl>
   <Twarn id="warn"> please select one answer !</Twarn>
   <TestB id='next' onClick = {handlenext}>Next Qustion</TestB>
   
   
   </TestContainer>
   <div id ="cont" style={{display:"none"}}>
   
     
   <TestB id='result' onClick = {handleresult} style={{display:"none"}}>Result</TestB>
   <Result id ='finish' style={{display:"none"}}>
   <button onClick={f} id='btn'>Save the result</button>

   <div id="res">
      {Anss.map((ele,index)=>{
        return(
          
           <All> 
          <Que>Q{index+1}    {data[index].qusetion}</Que>
          { data[index].correct_answer == ele  ?
          
           <Htrue>{ele}</Htrue> : 
           <Hfalse className ="false"> {ele}</Hfalse>
          
          }
          </All>
          
        )
        
      }
      
          )  
    } 
    </div>
            <div id="mark">
            you answerd Truley : {NumsOfTrue} of {data.length} <br>
            </br>
            and your  Answers Average is :{((NumsOfTrue/data.length)*100).toFixed()}%

            <div>
              
              <TestB onClick={getResult}style={{width: "57%"}}>If you want to see the previouse exams results </TestB>
              <ul id="prevresult" style={{display:"none"}} >
                {PrevTests != undefined ?
                PrevTests.map((ele,index)=>{
              
                  return(
                    <>
                  <li key = {index}> Test{index+1} : {ele.result}% - in <span style={{color : 'green '}}>{ele.testName}</span> </li>
                  <hr/>
                  </>
                  )

                }) :<></>}
              </ul>
            </div>
            
          
            </div>  
        
      
   </Result>
   </div>
   </>
   :
<div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Start the quiz</h1>
          
              
           <br></br>

           <p style={{textDecoration:"underline",fontWeight:"bold"}}>Some Notes Before You Start :</p>
           { window.localStorage.getItem('testType') == 'withlimit' ?  <p className='warn'>Every question has limit time , So Be CareFul ! </p> :<></>}

           <p className='warn'>If You Make 'Undo' , you will be redirected to ourtest page ..  </p>
           <p className='warn'>If You Dont Answer during 1 minute , you will be consedired that you choose incorrect Answer !  </p>
            
          {Logged ? <button className="button is-info is-medium" onClick={letsgo}  >Start</button> :
                    <button className="button is-info is-medium" onClick={()=>{window.location ='signup'}}  >Start</button>} 
        </div>


      </div>  
    </div>

 }

</>
 )
  }


export default Test