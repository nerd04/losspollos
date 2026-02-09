import Navbar from './components/Navbar/Navbar'
import {Routes, Route}  from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App