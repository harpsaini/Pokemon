
import './App.css';
import Search from './Search';
import Footer from './Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ModalComponent from './ModalComponent'


function App() {
  return (
  <Router>
  <div className="App wrapper">
    <header>
    <h1>Pokemon</h1>
    <p>Click Pokemon to catch</p>
    </header>
    <Search/>
    <Routes>
      <Route path = '/pokemon/:pokemonID' element= {<ModalComponent/>}/> 
    </Routes>
    <Footer/>
  </div>
  </Router>
  )
}

export default App;
