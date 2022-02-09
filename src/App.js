import React, {Component} from 'react'
import Pokemons from './components/pokemons'

class App extends Component {
  render(){
      return (
        <div>
          <header className="App-header">
            <Pokemons/>
          </header>
        </div>
      )
  }
}

export default App;
