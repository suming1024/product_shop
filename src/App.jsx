import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Main from './layouts/Main'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'
import SignIn from './pages/SignIn'

function App() {

  //로그인 상태관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //로그인한 사용자 아이디 관련
  const [loggedInUserId, setLoggedInUserId] = useState('');
  //로그인 핸들러
  const handleLogin = (userId) => {
    setIsLoggedIn(true);
    setLoggedInUserId(userId);
  }

  //로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUserId('');
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} loggedInUserId={loggedInUserId} onLogout={handleLogout} />
          {/* <Main /> */}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/products" element={<ProductList />} />
            {/* :id -> products/1과 같음  */}
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/SignIn' element={<SignIn onLogin={handleLogin} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
