import React from 'react'
import logoimg from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'
function Landing(){
    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div id="logo-container">
                <img src={logoimg} alt="Proffy"/>
                <h2>Sua plataforma de Jooj</h2>
                <img src={landing} alt="Plataforma de Estudos" className="hero-image"/>
            </div>
        </div>
    </div>
    )
}
export default Landing;