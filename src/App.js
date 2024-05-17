import "./App.css";
import Home from "./views/Home";
import Livros from "./views/Livro";
import NovoLivro from "./views/NovoLivro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import EditarLivro from "./views/EditarLivro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/livros" element={<Livros />} />
              <Route path="/novo-livro" element={<NovoLivro />} />
              <Route path="/editar-livro/:id" element={<EditarLivro />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
