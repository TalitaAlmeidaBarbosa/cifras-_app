import Main from './Components/Template/Main';
import Menu from './Components/Template/Menu';
import './App.css';
import Logo from './Components/Template/Top/Logo';
import Rotas from './Rotas';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Menu />
        <Rotas />
      </div>
    </BrowserRouter>
  );
}

export default App;
