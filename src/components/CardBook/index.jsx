import React from 'react'

export default function CardBook({ id, livro, autor, category }) {
  return (
    <div>
      <h4>{livro}</h4>
      <p>Autor: </p>
      {autor}
      <p>
        <span>Categoria: </span> {category}
      </p>
    </div>
  )
}
