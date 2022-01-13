import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage/homepage.component'
import ShopPage from './pages/Shop/shop.component'

function Hat(){
  return(
  <div>
    <h1>Hats</h1>
  </div>)
}

function App() {
  return (
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/hats' element={<Hat />}  />
      </Routes>
    
  );
}

export default App;
