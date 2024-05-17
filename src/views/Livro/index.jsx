import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import Message from "../../components/Message";
import Container from "../../components/Container";
import CardBook from "../../components/CardBook";

export default function Livros() {
  const [book, setBook] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");

  const fetchData = async () => {
    await fetch("http://localhost:5000/books", {
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

  const removeBook = async (id) => {
    await fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleteMessage("Livro exculido com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [book]);

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state;
  }

  return (
    <section className="livro_container">
      <h3>livros</h3>
      {message && <Message msg={message} type="success" />}

      {deleteMessage && <Message msg={deleteMessage} type="error" />}

      {book.map((data) => (
        <CardBook
          key={data.id}
          id={data.id}
          livro={data.nome_livro}
          autor={data.nome_autor}
          category={data.category.category}
          handlerRemove={removeBook}
        />
      ))}
    </section>
  );
}
