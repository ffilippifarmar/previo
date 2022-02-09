import React,{Component} from 'react';

 class Pokemons extends Component{
    state = {
        pokemons:[]
    };

    async componentDidMount(){
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        const data = await res.json();
        this.setState({pokemons: data})
        console.log(data)
    }

    render(){
        return(
           
            <div> 
                <h1>hola</h1>
                {   
                   this.state.pokemons.map(pokemon => {
                        return (
                        <div>
                            <h1>{pokemon}</h1>
                        </div>
                        )
                   })
                }
            </div>
        )
    }
}

export default Pokemons;