
import './App.css';
import Search from './Search';
import Footer from './Footer';

function App() {
  return (
  <div className="App wrapper">
    <header>
    <h1>Pokemon</h1>
    <p>Click Pokemon to catch</p>
    </header>
    <Search/>
    <Footer/>
  </div>
  )
}

export default App;
