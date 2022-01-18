import logo from './logo.svg';
import './App.css';

function App() {




  const handleSubmit = (e) =>{
  e.preventDeFault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData)


 
  }
  return (

    <form onSubmit={handleSubmit}>
    <p>Qual e seu nome?</p>
    <input type="texte" name="nome" placeholder="Qual e seu nome?" />
    <p>Qual e seu email?</p>
    <input type="texte" name="email" placeholder="Qual e seu email?" />
    <p>Qual e sua idade?</p>
    <input type="texte" name="idade" placeholder="Qual e a sua Idade?" />
    <p>Qual e seu seu nivel de escolaridade?</p>
    <select><option value={"Ensino Medio incompleto"}/>
    <option value={"Ensino Medio Completo"}/>
    <option value={"Ensino superior incompleto"}/>
    <option value={"Ensino superior completo"}/>
    </select>
    
  
  </form>
  

  );
}

export default App;
