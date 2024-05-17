import React from "react";
import "./style.css";

export default function CardBook({
  id,
  livro,
  autor,
  category,
  handlerRemove,
}) {
  const remove = (e) => {
    handlerRemove(id);
  };
  return (
    <div className="book_card">
      <h4>{livro}</h4>
      <p>Autor: </p>
      {autor}
      <p className="category_text">
        <span />
        Categoria: {category}
      </p>

      <div className="book_card_actions">
        <button onClick={remove}>Excluir</button>
      </div>
    </div>
  );
}
