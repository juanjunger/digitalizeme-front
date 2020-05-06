import React, { useState } from 'react';

import './styles.css';

function Newsletter() {
    const [email, setEmail] = useState('');

    function handleData(e) {
        e.preventDefault();
        alert(`Olá ${email}, não salvamos seu email ainda.`);
    }
    return (
        <section className="newsletter">
            <div className="container">
                <h1>Newsletter</h1>
                <p>Insira seu email para receber as atualizações da Ariela.</p>
                <p id="temporary">Por enquanto seu email não será salvo.</p>
                <form onSubmit={handleData}>
                    <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Digite seu email ..." required />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;