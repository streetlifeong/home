import { sliderImages } from "../assets/sliderImages/sliderImages"


export function Projects() {
    return(
        <section>
            <div>
                <h2 className="title1">Projetos</h2>

                <div className="projctSection" id="projctSection">
                    <div className="projectsDiv">
                        <div className="title2 project"><h3>Futebol</h3></div>
                        <div className="title2 project"><h3>Karatê</h3></div>
                        <div className="title2 project"><h3>Skate</h3></div>
                        <div className="title2 project"><h3>Inglês</h3></div>
                        <div className="title2 project"><h3>Culinária</h3></div>
                    </div>

                    <div>
                        <div className="slider">
                            <ul className="imageList">
                                {   
                                    sliderImages.map((i, n) => (
                                    <li><img src={i} className="sliderImage" id={n} alt="0"/></li>
                                ))}
                            </ul>

                            <div className="sliderButtonDiv">
                                <button className="sliderButton"  id="left"
                                onClick={ () => {
                                    let list = document.getElementsByClassName("sliderImage")
                                     let n = Number(list[0].alt)
                                     n += 1
                                     if((n > 0)){
                                        n = (sliderImages.length * -1) + 1
                                        console.log(n)
                                     }
                                    Array.prototype.map.call(list, (i) => {
                                        i.style.left = `${n * 300}px`
                                    })
                                     list[0].alt = String(n)
                                    

                                }}> ←  </button>
                                <button className="sliderButton right" 
                                                                onClick={ () => {
                                     let list = document.getElementsByClassName("sliderImage")
                                     let n = Number(list[0].alt)
                                     n -= 1
                                     if(((n*-1) >= sliderImages.length)){
                                        n = 0
                                     }
                                    Array.prototype.map.call(list, (i) => {
                                        i.style.left = `${n * 300}px`
                                    })
                                     list[0].alt = String(n)
                                    
                                    }}>
                                    →
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <span id="magicProjectSpan"></span>

            </div>
            <div></div>
        </section>
    )
}