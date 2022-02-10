import React,{Component} from 'react';
import './cards.css'

 class Pokemons extends Component{
    state = {
        pokemons:[]
    };

    async componentDidMount(){
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
        const data = await res.json();
        this.setState({pokemons: data.results})
        console.log(data)
    }

    render(){
        return(
           
            <div> 
                <table className='tableother'>
                <tr>
                <th className="headers">Nombre</th>
                <th className="headers">URL</th>
                </tr>    
                
                {   
                   this.state.pokemons.map(pokemon => {
                        return (
                        <div key={pokemon.name} className="cardtext-centerm-3">                           
                            <tr>
                                <td className='fieldname'>{pokemon.name}</td>
                                <td className='fieldurl'>{pokemon.url}</td>
                            </tr>
                        </div>
                       
                        )
                   })
                }
                </table>
            </div>
        )
    }
}


export default Pokemons;