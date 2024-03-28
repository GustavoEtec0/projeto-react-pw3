import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import syles from "./style.css";
import './style.css'
import Container from '../Container'

export default function Navbar() {
    return (
        <div>
            <Container>
                <ul className="list">
                    <li className="item">
                        <Link to="/"> home</Link>
                    </li>
                    <li className="item">
                        <Link to="/livros"> livro</Link>
                    </li>
                    <li className="item">
                        <Link to="/novo-livro"> Cadastra livro</Link>
                    </li>
                </ul>
            </Container>
            <Outlet />
        </div>
    )
}
