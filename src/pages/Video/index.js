import React from 'react'

import Banner from '../../components/Banner';

import './styles.css';

function Video() {
    return (
        <div>
            <Banner />
            <section className="video">
                <div className="container">
                    <div className="video__header">
                        <h1>Vídeo</h1>
                    </div>
                    <div className="video__content">
                        <iframe title="video" src="https://digitalizeme.s3-sa-east-1.amazonaws.com/digitalizeme-video-investidor.mp4" allow="autoplay;" allowFullScreen></iframe>
                    </div>
                    
                    <div className="video__info">
                        <p>Veja o <span>video</span> clicando <a href="https://digitalizeme.s3-sa-east-1.amazonaws.com/video+Final+-+Digitalize-me.pdf" target="_blank" rel="noopener noreferrer">aqui!</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Video