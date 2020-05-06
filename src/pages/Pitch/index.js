import React from 'react'

import Banner from '../../components/Banner';

import './styles.css';

function Pitch() {
    return (
        <div>
            <Banner page="pitch" />
            <section className="pitch">
                <div className="container">
                    <div className="pitch__header">
                        <h1>Pitch</h1>
                    </div>
                    <div className="pitch__video">
                        <iframe title="pitch" src="https://digitalizeme.s3-sa-east-1.amazonaws.com/digitalizeme-pitch-investidor.mp4" allow="autoplay;" allowFullScreen></iframe>
                    </div>
                    
                    <div className="pitch__info">
                        <p>Veja o <span>pitch</span> clicando <a href="https://digitalizeme.s3-sa-east-1.amazonaws.com/Pitch+Final+-+Digitalize-me.pdf" target="_blank" rel="noopener noreferrer">aqui!</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Pitch