
import './App.css';
import Search from './Search';
import Footer from './Footer';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import ModalComponent from './ModalComponent'
import SavedPokemon from './SavedPokemon';


function App() {
  return (
  <Router>
    <div className="App wrapper">
      <header>
        <Link className="reactLinks" to = '/'><h1>Pokemon</h1></Link>
        <div >
          <Link className="reactLinks" to='/savedpokemons'><p>Saved Pokemons</p></Link>
        </div>
      </header>
    <Routes>
      <Route exact path='/' element={<Search/>}/>  
      <Route path = '/savedpokemons' element={<SavedPokemon/>}/>
      <Route path = '/pokemon/:pokemonID' element= {<ModalComponent/>}/>
    </Routes>
    <Footer/>
  </div>
  </Router>
  )
}

export default App;
