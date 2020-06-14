import React from 'react'

import './styles.css'

import bannerHome from '../../assets/images/banner-home.png'
import bannerPitch from '../../assets/images/banner-pitch.png'

function Banner(props) {
    return (
        <section className="banner">
            <div className="banner__img">
                <img src={props.page === "home" ? bannerHome : props.page === "pitch" ? bannerPitch : ""} alt="Banner"/>
            </div>
        </section>
    )
}

export default Banner