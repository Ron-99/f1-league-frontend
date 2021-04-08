import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {Author, AuthorImg, AuthorInfo, AuthorInfoText, AuthorName, AuthorOthersInfo, AuthorSocial, Description, MainImg, NewsInformationStyle, Title, Post} from './style';

function NewsInformationPage (){

    const title = 'F1: Hamilton bate mais um recorde de Schumacher após GP do Bahrein';
    const description = 'Heptacampeão é agora o piloto que mais liderou voltas na história da F1';
    const author = 'Ronaldo Gomes';
    const date = 'Abr 03'
    const readTime = '4 min de leitura';

    return(
        <NewsInformationStyle>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Author>
                <AuthorInfo>
                    <AuthorImg></AuthorImg>
                    <AuthorInfoText>
                        <AuthorName>{author}</AuthorName>
                        <AuthorOthersInfo>{date} · {readTime}</AuthorOthersInfo>
                    </AuthorInfoText>
                </AuthorInfo>
                <AuthorSocial>
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </AuthorSocial>
            </Author>

            <MainImg src="https://cdn-1.motorsport.com/images/amp/0RrogJE0/s6/lewis-hamilton-mercedes-1st-po.jpg"/>
            <Post>
                <p>Desde que estreou na F1 em 2007, com a McLaren, Hamilton liderou e venceu pelo menos um GP por temporada disputada.</p>
                <p>A primeira vez que liderou um GP foi já em sua estreia, na Austrália, quando esteve à frente por quatro voltas. No primeiro ano, esteve na primeira posição em 12 oportunidades, com destaque para a Hungria, onde liderou de ponta a ponta até cruzar a linha de chegada.</p>
                <p>A situação de Hamilton é muito distinta da de Schumacher. O alemão conseguiu liderar uma corrida pela primeira vez apenas um ano depois de sua estreia e no circuito onde disputou seu primeiro GP. Foi na Bélgica em 1992, quando corria pela Benetton, ficando 11 voltas à frente, convertendo em sua primeira vitória na F1.</p>
            </Post>
            
        </NewsInformationStyle>
    )
}

export default NewsInformationPage;