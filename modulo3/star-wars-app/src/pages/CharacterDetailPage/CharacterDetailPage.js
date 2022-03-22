import axios from "axios";
import React from "react";

export default class CharacterDetailPage extends React.Component{
state = {
    character: {},
    planet: ""
}

componentDidMount(){
    this.getCharacter()
}

componentDidUpdate(prevState, prevProps){
    if (this.state.character !== prevState.character){
    this.getPlenet()
    }
}

getCharacter = () => {
    axios.get(this.props.url)
    .then((ress)=> this.state({character: ress.data}))
    .catch((err)=> console.log(err.response))
}

getPlenet = () => {
 axios.get(this.state.character.homeworld)
 .then((ress) => this.setState({planet: ress.data.name}))
 .catch((err)=> console.log(err.response))
}


    render(){

console.log(this.state.character)

        return( <div>
{this.state.character.name && this.state.planet?(
    <div>
            <p>name: {this.state.character.name}</p>
            <p>planeta natal: {this.state.planet}</p>
    </div>
) :<p>Carregando...</p>
}


          
          <button onclick={this.props.goToListPage}>Voltar </button>
        </div>
    
    )
}
}