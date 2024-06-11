import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import Message from "../../components/Message";
import CardBook from "../../components/CardBook";

export default function Livros() {
  const [book, setBook] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");

  const fetchData = async () => {
    await fetch("http://localhost:5000/livros", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setBook(data.data ))
      .catch((err) => {
        console.log(err);
      });
  };

  const removeBook = async (id) => {
    await fetch(`http://localhost:5000/livros/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
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
          livro={data.titulo_livro}
          autor={data.autor_livro}
          // category={data.category.category}
          handlerRemove={removeBook}
        />
      ))}
    </section>
  );
}
