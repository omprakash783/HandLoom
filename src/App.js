import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage/homepage.component'
import ShopPage from './pages/Shop/shop.component'
import SignUpPage from './pages/SignUp/signup.component'
import Header from './components/header/header'

import { auth } from './firebase/firebase.utils'

import './App.css'


class App extends React.Component {

constructor(){
  super()
  this.state = {
    currentUser:null
  }
}

unsubscribeFromAuth = null

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {this.setState({currentUser:user })
    console.log(user)
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignUpPage />} />
      </Routes>
      </div>
    
  );
  }
}

export default App;
