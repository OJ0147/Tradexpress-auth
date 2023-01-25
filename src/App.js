
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Component/navComponent/Navbar'
import Home from './pages/Home/Home'
import Trade from './pages/trade/Trade'
import Learn from './pages/learn/Learn'
import Login from './pages/auth/Login/Login'
import Start from './pages/auth/Register/Start'
import Individual from './Component/RegisterComponents/Individual';
import Business from './Component/RegisterComponents/Business';
import WelcomePage from './pages/resetWelcomePage.js/WelcomePage';
import Buy from './Component/tradeComponents/Buy';
import Sell from './Component/tradeComponents/Sell';
import Reset from './pages/auth/reset/Reset';




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
        <Route path='/Reset' element={<Reset/>} />
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
