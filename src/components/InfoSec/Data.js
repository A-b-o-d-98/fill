import { Route } from 'react-router-dom';
import { Link } from 'react-scroll';
import i1 from '../../image/1.png'
import i2 from '../../image/2.png'
import i3 from '../../image/3.png'
import i4 from '../../image/4.png'


import icon1 from '../../image/svg6.svg'
import icon4 from '../../image/1.svg'
import icon3 from '../../image/svg5.svg'
import icon2 from '../../image/svg1.svg'

export const homeOjOne = {
    id :'about',
    lightBg: false,
    lightText:true,
    lightTextDesc :true,
    topLine:'About The Test',
    headline:' Test in python Language ',
    description:' choose one of many Test , includes the almost Fields in pyhton programmin language , From the Basics to The Advanced ...',
    buttonLabel: 'Get started',
    imgStart:false,
    image:icon2,
    alt: 'Car',
    dark:true,
    primary: true,
    darkText:false,
    di:false

};


export const homeOjTwo = {
    id :'ourtest',
    buttontag:"/ourtest",
    lightBg: true,
    lightText:false,
    lightTextDesc :false,
    topLine:'Ourtests',
    headline:'Unlimited Transactions with zero fees',
    description:'Get access to our tests that includes many kinds , Baiscs , Advanced , General , so if you want to know more about them Click below',
    buttonLabel: 'Tests',
    imgStart:false,
    img:icon3,
    alt: 'Piggybank',
    dark:false,
    primary: false,
    darkText:true,
    
};


export const homeOjThree = {
    id :'services',
    buttontag:"/services",
    lightBg: false,
    lightText:true,
    lightTextDesc :false,
    topLine:'Our Services',
    headline:'Know More About Our Services',
    description:'Include some detailes about the webSite , resourses of the test and certificate in the future ',
    buttonLabel: 'Learn More',
    imgStart:false,
    img:icon4,
    alt: 'Paper',
    dark:true,
    primary: false,
    darkText:false,

};

export const homeOjFour = {
    id :'signup',
    buttontag:"/signup",
    lightBg: true,
    lightText:false,
    lightTextDesc :true,
    topLine:'Sign Up Now',
    headline:'Get Accessed to our services ',
    description:'Get access to our exams dirctly with out paying  just SignUp to  Live the experience  and we allwos you to make unlimited Exams without getting charged and fees',
    buttonLabel: 'SignUp',
    imgStart:false,
    img:icon1,
    alt: 'Paper',
    dark:true,
    primary: true,
    darkText:true,

};