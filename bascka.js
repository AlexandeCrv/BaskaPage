var h1 = document.getElementById('nome')
var p = document.getElementById('descrição')
var tamanho = document.getElementsByTagName('button')
    function clickl(time){
    switch(time){

        case 'lakers':
            h1.innerHTML = 'LAKERS'
            p.innerHTML = 'A equipe foi fundada em 1947, em Minneapolis, onde recebeu seu nome em alusão ao fato do estado de Minnesota ser conhecido como "Terra dos Mil Lagos", e venceu cinco títulos da liga antes de uma queda de público presente levar a uma relocação para Los Angeles em 1960.'
            document.body.style.backgroundImage = 'url(lakerss.jpg)'
            
            break

            case 'celtics':
            h1.innerHTML = 'CELTICS'
            p.innerHTML = 'Foi em 1912, no ginásio Hudson Guild Settlement House, que McCormack reuniu um grupo de colegas e criou um time chamado Celtics. Esse foi o nome escolhido, pois os jogadores eram imigrante irlandeses e pertenciam a um clube na cidade chamado Celtics.'
            document.body.style.backgroundImage = 'url(celticss.jpg)'
            break

            case 'warriors':
            h1.innerHTML = 'WARRIORS'
            p.innerHTML = 'Os Warriors competem na National Basketball Association (NBA) como membro da Divisão do Pacífico da Conferência Oeste. Fundado em 1946 na Filadélfia, o Warriors se mudou para a área da Baía de São Francisco em 1962 e tomou o nome da cidade, antes de mudar seu apelido geográfico para Golden State em 1971.'
            document.body.style.backgroundImage = 'url(warriorss.jpg)'
            break

            case 'miami':
            h1.innerHTML = 'MIAMI-HEAT'
            p.innerHTML = 'O Miami Heat foi fundado em 1988 como uma equipa de expansão, juntando-se à NBA juntamente com a Charlotte Hornets. A primeira temporada da equipa foi uma luta, pois o Heat terminou com um recorde de 15-67, o pior da NBA nesse ano.'
            document.body.style.backgroundImage = 'url(miamiheat.jpg)'
            break

            case 'bryant':
            h1.innerHTML = 'BRYANT'
            p.innerHTML = 'Kobe Bryant era filho caçula, nascido no condado de Filadélfia, no estado americano da Pensilvânia. Aos seis anos, Kobe mudou-se com a família para a Itália, quando o pai deixou a NBA para jogar na Europa. Kobe recebeu influências fortes do basquete, além disso, passou a falar italiano e espanhol fluentemente.'
            document.body.style.backgroundImage = 'url(kobe.jpg)'
            break

    }



    
    
    
    
    
    }