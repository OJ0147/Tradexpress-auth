
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Trade from './Component/Trade'
import Learn from './Component/Learn'
import Login from './Component/Login'
import Start from './Component/Start'
import Individual from './Component/Individual';
import Business from './Component/Business';
import WelcomePage from './Component/WelcomePage';
import Buy from './Component/Buy';
import Sell from './Component/Sell';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Trade' element={<Trade/>} >
          <Route path='buy' element={<Buy/>}/>
          <Route path='sell' element={<Sell/>}/>
        </Route>
        <Route path='/Learn' element={<Learn/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path= '/Start' element={<Start/>} >
          <Route path='individual' element={<Individual/>}/>
          <Route path='business' element={<Business/>}/>
        </Route>
        <Route path='/WelcomePage' element={<WelcomePage/>}/>
      </Routes>
      </BrowserRouter>
      
  
      
    </div>
  );
}

export default App;
