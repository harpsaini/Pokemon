
import './App.css';
import Search from './components/Search';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import SavedPokemon from './components/SavedPokemon';

function App() {
  return (
  <Router>
    <div className="App wrapper">
      <header>
        <Link className="reactLinks" to = '/'><h1>Pokemon</h1></Link>
        <div >
          <Link className="reactLinks savedPokemonButton" to='/savedpokemons'><p>Saved Pokemons</p></Link>
        </div>
      </header>
    <Routes>
      <Route exact path='/' element={<Search/>}/>   
      <Route path = '/savedpokemons' element={<SavedPokemon/>}/>
    </Routes>
    <Footer/>
  </div>
  </Router>
  )
}

export default App;
