import Posts from './components/Posts'

import {NewsStyle, LastNews, LastNewsTitle} from './style'

function NewsPage () {

    return(
        <NewsStyle>
            <LastNews>
                <LastNewsTitle>Últimas Notícias</LastNewsTitle> 
                <Posts 
                    author="Ronaldo Gomes" 
                    title="F1: Hamilton bate mais um recorde de Schumacher após GP do Bahrein"
                    description="Heptacampeão é agora o piloto que mais liderou voltas na história da F1"
                    img="https://cdn-1.motorsport.com/images/amp/0RrogJE0/s500/lewis-hamilton-mercedes-1st-po.jpg"
                    color="#aad464" />
                <Posts
                    author="Ramires Fischer"
                    title="F1: Revisão na extremidade traseira transforma carro da Red Bull"
                    description="Traseira imprevisível do RB16 deu trabalho para Max Verstappen e Alex Albon em 2020"
                    img="https://cdn-1.motorsport.com/images/amp/2GzoWZz0/s500/red-bull-racing-rb16b-rear-sus.webp"
                    color="#64b0d4"/>

<Posts
                    author="Marinho"
                    title={`F1 - Wolff rebate reclamação de "estratégia de defesa" de Bottas: "Não havia outra opção"`}
                    description="O chefe da Mercedes disse que entende a frustração do finlandês, mas afirmou que não havia outra opção já que Bottas perdeu uma posição na largada"
                    img="https://cdn-1.motorsport.com/images/amp/254Xbl90/s500/valtteri-bottas-mercedes-w12-m.webp"
                    color="#6664d4"/>
                    <Posts 
                    author="Ronaldo Gomes" 
                    title="Análise técnica: entenda como as equipes de F1 responderam ao desafio do assoalho de 2021"
                    description="Mudanças no assoalho, dutos de freio e difusor visavam originalmente reduzir o downforce em 10%"
                    img="https://cdn-1.motorsport.com/images/amp/YBeqJen2/s500/lance-stroll-aston-martin-amr2.webp"
                    color="#aad464" />
            </LastNews>

        </NewsStyle>
    )
}

export default NewsPage;