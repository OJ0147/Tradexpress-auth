
import './App.css';
import { Routes, Route} from 'react-router-dom'
// import Navbar from './Component/navComponent/Navbar'
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/dashboard/Dashboard';
import WithoutNavBar from './Component/navComponent/withoutNavBar';
import WithNavBar from './Component/navComponent/withNavBar';




function App() {
  return (
    <div className="App">
     <ToastContainer/> 
      <Routes>
        <Route element={<WithoutNavBar/>} >
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Route>

        <Route element={<WithNavBar/>} >
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
        </Route>
    
      </Routes>
  
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <ToastContainer/>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/Trade' element={<Trade/>} >
//           <Route path='buy' element={<Buy/>}/>
//           <Route path='sell' element={<Sell/>}/>
//         </Route>
//         <Route path='/Learn' element={<Learn/>} />
//         <Route path='/Login' element={<Login/>} />
//         <Route path='/Reset' element={<Reset/>} />
//         <Route path= '/Start' element={<Start/>} >
//           <Route path='individual' element={<Individual/>}/>
//           <Route path='business' element={<Business/>}/>
//         </Route>
//         <Route path='/WelcomePage' element={<WelcomePage/>}/>
//         <Route path='/Dashboard' element={<Dashboard/>}/>
//       </Routes>
//       </BrowserRouter>
      
  
      
//     </div>
//   );
// }

export default App;
