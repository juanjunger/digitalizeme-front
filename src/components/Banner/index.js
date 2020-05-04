import React from 'react';

import './styles.css';

import bannerImg from '../../assets/images/banner.png';

function Banner() {
    return (
        <section className="banner">
            <div className="banner__img">
                <img src={bannerImg} alt="Banner"/>
            </div>
        </section>
    );
}

export default Banner;