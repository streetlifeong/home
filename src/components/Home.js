import React from "react"
import streetLifeWhite from "../assets/streetLifeWhite.jpg"
import futball from "../assets/futballHome.jpg"


let t = false
/* 
//todo home
//todo projects slider
//todo responsiveness
todo animation
*/

export function Home(){
    return (
        <section id="Home">
            <header>
                <div>
                    <div><img src={streetLifeWhite}/></div>
                    <nav id="nav">
                        <ul>
                            <a ><li>Inicio</li></a>
                            <a><li>Missão</li></a>
                            <a><li>Visão</li></a>
                            <a><li>Objetivos</li></a>
                            <a><li>Valores</li></a>
                            <a><li>Projetos</li></a>
                            <a><li>Doar</li></a>
                        </ul>
                    </nav>
                    <div className="nav2" id="nav2">
                        <div id="burguerMenu" onClick={() => {
                            if(t){

                                t = false
                            }else{
                                t = true
                            }

                            
                        }}>
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div id="menu"></div>
                    </div>
                </div>
            </header>

            <div>
                <div className="homeDiv" id="homeDiv">
                    <div>
                        <div>
                            <h1 className="streetLife">Street Life</h1>
                            <div id="magicBoxStreetLife"></div>
                        </div>

                        <div>
                            <p className="streetLifeParagraph">Construindo oportunidades,</p>
                            <p className="streetLifeParagraph">realizando sonhos.</p>
                        </div>
                    </div>

                    <div id="futballHomeDiv">
                        <img src={futball} id="futballHome"/>
                    </div>
                </div>

                <div className="title1" id="donateButton"><h2 >Doar</h2></div>
                <span id="magicSpanForDonateButton"></span>
            </div>
        </section>
    )
}