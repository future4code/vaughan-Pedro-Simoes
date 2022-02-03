import React from 'react';
import axios from 'axios';
import './App.css';



function App() {

  getUserById=()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
    const body = {name:this.state.inputValue}
    const axiosConfig = {headers:{Authorization:"pedro-simoes-vaughan"}}

    axios.post(url,body,axiosConfig)
    .then((res)=>{
      alert("sucesso")
      this.setState({inputValue:""})
      this.getUserById()

    })
    .catch((err)=>{
      console.log(err.response)
      alert("Preencha todos os campos obrigatórios")
    })
  }
  
  return (
    <div className="App">
      <button>trocar de tela</button>
     <input type="text" placeholder="Nome" ></input>
     <input type="text" placeholder="email"></input>
     <button>Enviar</button>
    </div>
  );
}

export default App;
