import React , {useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfoSec from '../components/InfoSec'
import { homeOjOne,homeOjTwo,homeOjThree,homeOjFour } from '../components/InfoSec/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import usefetch from 'use-http'
const Home = () => {
    
    
    const [isOpen , setIsOpen] = useState(false)
    const [username,setusername]=useState('');
    const {get,post,response,loading,error}=usefetch('http://localhost:3000');

    const toggle = () => {
        setIsOpen(!isOpen);
    };
   
     
    return (
        <div>
          
          <Sidebar  isOpen={isOpen} toggle={toggle}  />
          <Navbar   toggle={toggle}  />
          <Hero/>
          <InfoSec {...homeOjOne}  />
          <InfoSec   {...homeOjTwo}/>
          <InfoSec {...homeOjThree} />
          <InfoSec {...homeOjFour} />
          <Footer/>
          
        </div>
    )
}

export default Home
