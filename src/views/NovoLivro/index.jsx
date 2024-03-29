import React from 'react'
import './style.css'
import Input from '../../components/Form'

export default function NovoLivro() {
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
                <input type="submit" value="cadastra livro" />
            </form>
        </section>
    )
}
