import './App.css';
import Header from './components/shared/Header/Header';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import { Routes, Route } from 'react-router-dom';

// Route - Define qual componente(element) vai aparecer na tela de acordo com o seu caminho (path);
// Routes - renderiza o elemento que melhor correponde a rota atual.
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </div>
  );
}

export default App;