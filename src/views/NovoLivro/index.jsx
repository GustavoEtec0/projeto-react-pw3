import React, { useEffect, useState } from 'react'
import './style.css'
import Input from '../../components/Form/Input.jsx'
import Select from '../../components/Form/Select.jsx'

export default function NovoLivro() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchData()
  }, [categories])

  const fetchData = async () => {
    await fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <section className="novo_livro_container">
      <h1>novo livros</h1>
      <form>
        <Input
          type="text"
          name="nome_livro"
          id="nome_livro"
          placeholder="digite o titulo do livro"
          text="digite o titulo do livro"
        />
        <Input
          type="text"
          name="nome_autor"
          id="nome_autor"
          placeholder="digite o nome do autor"
          text="digite o nome do autor"
        />
        <Input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="digite a descrição"
          text="digite a descrição"
        />
        <Select
          name="categoria_id"
          text="Selecione uma categoria"
          option={categories}
        />
        <input type="submit" value="cadastra livro" />
      </form>
    </section>
  )
}
