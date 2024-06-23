import { SipleText } from "./SimpleText";

export function AboutUs(){
    return(
        <section id="aboutUs">
            <h2 className="title1">Sobre Nós</h2>
            <div className="aboutUsDiv">
                <SipleText title="Missão" paragraph="Proporcionar acesso a atividades esportivas, culturais e educacionais de qualidade para crianças e jovens do bairro Trieste, visando promover o desenvolvimento integral e o empoderamento da comunidade."/>
                <SipleText title="Visão" paragraph="Buscamos ser uma referência na transformação social por meio do esporte, cultura e educação, sendo reconhecidos pelo impacto positivo que geramos na vida das pessoas e pela promoção da igualdade de oportunidades."/>
                <SipleText title="Objetivos Gerais" paragraph="Promover o desenvolvimento integral de crianças e adolescentes por meio de atividades esportivas, culturais e educacionais. Contribuindo para a formação de cidadãos conscientes, ativos e saudáveis. Estimulando a socialização e o convívio em grupo, fortalecendo os laços de amizade e respeito mútuo. Incentivando a participação das famílias nas atividades propostas, fortalecendo os vínculos familiares."/>
                <div className="simpleDiv"><div className="title2 simpleTitle"><h3>Valores</h3></div><p className="simpleText"><ul><li>Amor a Deus</li><li>Amor ao próximo</li><li>Ética e transparência</li><li>Responsabilidade social</li><li>Soliariedade</li></ul></p></div>
            </div>
        </section>
    )
}