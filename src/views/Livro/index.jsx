import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './style.css'
import Message from '../../components/Message'
import Container from '../../components/Container'
import CardBook from '../../components/CardBook'

export default function Livros() {
  const [book, setBook] = useState([])

  const fetchData = async () => {
    await fetch('http://localhost:5000/books', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const location = useLocation()
  let message = ''

  if (location.state) {
    message = location.state
  }

  return (
    <section className="livro_container">
      <div>
        <h3>livros</h3>
        {message && <Message msg={message} type="error" />}
        <Container>
          {book.map((data) => (
            <CardBook
              key={data.id}
              id={data.id}
              livro={data.nome_livro}
              autor={data.nome_autor}
              category={data.category.category}
            />
          ))}
        </Container>
      </div>
    </section>
  )
}
