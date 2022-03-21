import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import React from "react";


export default class App extends React.Component {

state = {
  currentScreen: "list",
  clickedCharacterUrl: ""
}

goToDetailPage = (url) => {
  this.setState({currentScreen: "detail", clickedCharacterUrl: url})
}

goToListPage = () => {
this.state({currentScreen:"list", clickedCharacterUrl:""})
}

selectPage = () => {
  switch (this.state.currentScreen) {
  case "list":
  return <CharacterListPage goToDetailPage={this.goToDetailPage}/>
case "detail":
return <CharacterDetailPage goToListPage={this.goToListPage} url={this.state.clickedCharacterUrl}/>
default:
  return <CharacterListPage goToDetailPage={this.goToDetailPage}/>

  
}
}

  render (){
    return(
   <div>
     {this.selectPage()}
   </div>
  );
}
}

