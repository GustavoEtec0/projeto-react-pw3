import React, { useEffect, useState } from "react";
import "./style.css";
import Input from "../../components/Form/Input.jsx";
import Select from "../../components/Form/Select.jsx";
import { useNavigate } from "react-router-dom";

export default function NovoLivro() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState({});

  useEffect(() => {
    fetchData();
  }, [categories]);

  const fetchData = async () => {
    await fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.log(err);
      });
  };

  function handleChangeBook(e) {
    setBooks({ ...books, [e.target.name]: e.target.value });
  }

  function handleChangeCategories(e) {
    setBooks({
      ...books,
      category: {
        id: e.target.value,
        category: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function createBook(book) {
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then(
        (data) => setBooks(data),
        navigate("/livros", { state: "Livro cadastrado com sucesso" })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  function submit(e) {
    e.preventDefault();
    createBook(books);
  }

  return (
    <section className="novo_livro_container">
      <h1>novo livros</h1>
      <form onSubmit={submit}>
        <Input
          type="text"
          name="nome_livro"
          id="nome_livro"
          placeholder="digite o titulo do livro"
          text="digite o titulo do livro"
          handlerOnChange={handleChangeBook}
        />
        <Input
          type="text"
          name="nome_autor"
          id="nome_autor"
          placeholder="digite o nome do autor"
          text="digite o nome do autor"
          handlerOnChange={handleChangeBook}
        />
        <Input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="digite a descrição"
          text="digite a descrição"
          handlerOnChange={handleChangeBook}
        />
        <Select
          name="categoria_id"
          text="Selecione uma categoria"
          option={categories}
          handlerOnChange={handleChangeCategories}
        />
        <input type="submit" value="cadastra livro" />
      </form>
    </section>
  );
}
