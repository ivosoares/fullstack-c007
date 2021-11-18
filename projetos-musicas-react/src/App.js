import './App.css';
import Header from './components/shared/Header/Header';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import { Routes, Route } from 'react-router-dom';
import View from './pages/View/View';
import Edit from './pages/Edit/Edit';

// Route - Define qual componente(element) vai aparecer na tela de acordo com o seu caminho (path);
// Routes - renderiza o elemento que melhor correponde a rota atual.

// componentes - é um bloco de codigo  e logica que pode ser reutilizado e diversos locais da aplicação
// pages - é um componente geral que pode conter outros componentes que contem uma estrutura de pagina.
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;