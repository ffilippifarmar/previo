import react, {Component} from 'react';
import { Navigate } from "react-router-dom";

export default class Login extends Component{

    state = {
        users:[],
        password: '',
        username:'',
    }

    async componentDidMount(){
        await fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => this.setState({users: json}))
            .catch(error => {
                console.log('Hay un error en la llamada');
              });
    }

    onSubmit(logged){
        if(this.state.username == '' || this.state.password == ''){
            alert("Por favor completar usuario y contraseña.")
        }else{
            if(this.state.users.length > 0){
                this.state.users.map(user => {
                
                if((user.username == this.state.username) && (user.email == this.state.password)){
                    logged = true;
                }
                })
            }
            console.log(logged)
            if(logged){
                console.log("entro")
                return <Navigate to="dashboard"/>
            }
            else{
                alert("Usuario y/o contraseñas incorrectos")
            }
        }
    }


    credsChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div>
                <form>
                <div>
                    <br/>
                    <br/>
                    <label>Ingrese el usuario</label>
                    <input name="username" type="text" onChange={this.credsChange}></input>
                    </div>
                    <br/>
                    <label>Ingrese su contraseña</label>
                    <input name="password" type="password" onChange={this.credsChange}></input>
                    <br/>
                    <button  onClick={this.onSubmit.bind(this,this.props.logged)} >Login</button>
                </form>
            </div>
        )
    }
    
    
}