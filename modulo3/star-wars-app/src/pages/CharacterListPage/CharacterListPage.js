import React from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { CharacterCard} from "./styled"

export default class CharacterListPage extends React.Component{
state ={
    characterList: []
}
 
componentDidMount(){
    this.getCharacterList()
}


getCharacterList = () => {
axios.get(`${BASE_URL}/people`)
.then((res)=> this.setState({characterList: res.data.results}))


.catch((err)=> console.log(err.reponse))


}

    render() {

        const characters = this.state.characterList.map((person) => {
            return (
            <CharacterCard 
            key={person.url}
            onClick={() => this.props.goToDetailPage(person.url)}

            >{person.name}
            </CharacterCard>)
        })

        console.log(this.state.characterList)
        return (
        <div>
           {characters}
        </div>
        )
    }
}