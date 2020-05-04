import React from 'react';

import './styles.css';

function Newsletter() {
    return (
        <section className="newsletter">
            <div className="container">
                <h1>Newsletter</h1>
                <p>Insira seu email para receber as atualizações.</p>
                <form>
                    <input type="text" placeholder="Digite seu email ..." required />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;