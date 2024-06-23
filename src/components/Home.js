import React from "react"
import streetLifeWhite from "../assets/streetLifeWhite.jpg"
import futball from "../assets/futballHome.jpg"


let t = false

export function Home(){
    return (
        <section id="Home">
            <header>
                <div>
                    <div><img src={streetLifeWhite}/></div>
                    <nav id="nav">
                        <ul>
                            <a href="#Home"><li>Inicio</li></a>
                            <a href="#aboutUs"><li>Missão</li></a>
                            <a href="#aboutUs"><li>Visão</li></a>
                            <a href="#aboutUs"><li>Objetivos</li></a>
                            <a href="#aboutUs"><li>Valores</li></a>
                            <a href="#projects"><li>Projetos</li></a>
                            <a onClick={() => {
                                    window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter",
                                     "hello!!!")
                                    }}><li>Doar</li></a>
                        </ul>
                    </nav>

                    <div id="hidden">
                        <nav className="nav3" id="nav3">
                            <ul id="legendUl">
                            <a href="#Home"><li>Inicio</li></a>
                            <a href="#aboutUs"><li>Missão</li></a>
                            <a href="#aboutUs"><li>Visão</li></a>
                            <a href="#aboutUs"><li>Objetivos</li></a>
                            <a href="#aboutUs"><li>Valores</li></a>
                            <a href="#projects"><li>Projetos</li></a>
                                <a onClick={() => {
                                    window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter",
                                     "hello!!!")
                                    }}><li>Doar</li></a>
                            </ul>
                        </nav>
                    </div>

                    <div className="nav2" id="nav2">
                        <div id="burguerMenu" onClick={() => {
                            let menu = document.getElementById("nav3")
                            if(t){
                                menu.style.display = "none"
                                t = false
                            }else{
                                menu.style.display = "block"
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

                <a href="#">
                    <div className="title1" id="donateButton"><h2 >Doar</h2></div>
                </a>
                <span id="magicSpanForDonateButton"></span>
            </div>
        </section>
    )
}