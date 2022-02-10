import React, {Component} from 'react'
import Pokemons from './components/pokemons'
import Login from  './components/login'
import { BrowserRouter as Router, Navigate, Route,Routes } from 'react-router-dom';


class App extends Component {
  
  state = {
    isAuth: false
  }
  
  login(){
    if(this.state.isAuth){
      <Navigate to="/dashboard"/>
    }
    
  }

  render(){
      return (
        <Router>
          <Routes>
            <Route path="/" element={<div><Login logged={this.state.isAuth}/></div>}/>
            <Route path="/dashboard" element={<div><Pokemons logged={this.state.isAuth}/></div>}/>
          </Routes>
        </Router>
      )
  }
}

export default App;
