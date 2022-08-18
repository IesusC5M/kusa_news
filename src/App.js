import './App.css';
import Nav from './Components/Nav.js';
function App() {

  return(
    <>
    <nav id="nav">
      <img src="/logo.png" alt="kusa-news" width="150px"></img>
      <Nav text="MÁS RECIENTES | トップ"/>
      <Nav text="ENTRETENIMIENTO | エンタメ"/>
      <Nav text="DEPORTES | スポーツ"/>
      <Nav text="POLÍTICA | 政治"/>
    </nav>
    </>)

}

export default App;
