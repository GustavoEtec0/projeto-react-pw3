import React from 'react'
import './style.css'
import Message from '../../components/Message'
import { useLocation } from 'react-router-dom'

export default function Livros() {
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
            </div>
        </section>
    )
}
