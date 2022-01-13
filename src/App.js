import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage/homepage.component'
import ShopPage from './pages/Shop/shop.component'
import Header from './components/header/header'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
      </Routes>
      </div>
    
  );
}

export default App;
