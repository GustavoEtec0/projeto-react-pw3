import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import Select from "../../components/Form/Select";
import Input from "../../components/Form/Input";

export default function EditarLivro(params) {
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  const fetchData = async () => {
    await fetch(`http://localhost:5000/books/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCategories = async () => {
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

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const editBook = (book) => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        navigate("/livros", { state: "Livro editado com sucesso" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleChangeBook(e) {
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  function handleChangeCategories(e) {
    setBook({
      ...book,
      category: {
        id: e.target.value,
        category: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function submit(e) {
    e.preventDefault();
    editBook(book);
  }

  return (
    <div className="book_container">
      <h1>editarLivro</h1>
      <form onSubmit={submit}>
        <Input
          type="text"
          name="nome_livro"
          id="nome_livro"
          placeholder="digite o titulo do livro"
          text="digite o titulo do livro"
          handlerOnChange={handleChangeBook}
          value={book.nome_livro}
        />
        <Input
          type="text"
          name="nome_autor"
          id="nome_autor"
          placeholder="digite o nome do autor"
          text="digite o nome do autor"
          handlerOnChange={handleChangeBook}
          value={book.nome_autor}
        />
        <Input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="digite a descrição"
          text="digite a descrição"
          handlerOnChange={handleChangeBook}
          value={book.descricao}
        />
        <Select
          name="categoria_id"
          text="Selecione uma categoria"
          option={categories}
          handlerOnChange={handleChangeCategories}
        />
        <input type="submit" value="editar livro" />
      </form>
    </div>
  );
}
