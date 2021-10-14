import React from 'react';
import './App.css';
//import Home from './pages/index'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import Home from './pages'
import LogInPage from './pages/LogIn'
import SignupPage from './pages/signup'
import QuizPage from './pages/quizup'
import Test from './components/Test/test'
import ServicesPage from './pages/services';
import OurTestPage from './pages/ourtest';
//import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Switch>
       
        <Route exact path='/' component={Home} />
        <Route path='/LogIn' component={LogInPage} />
        <Route path='/Test' component={Test} />
        <Route path='/services' component={ServicesPage}/>
        <Route path='/signup' component={SignupPage} />
        <Route path='/quizup' component={QuizPage} />
        <Route path='/ourtest' component={OurTestPage}/>

      
      </Switch>
    
    </Router>

  );
}

export default App;
