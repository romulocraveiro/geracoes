function mostrar(){
    var txtano = document.getElementById("txtano");
    var ano = Number(txtano.value);
    var res = document.getElementById("res");
    var img = document.createElement('img');
    var geracao = '';

    if(ano >=1883 && ano <=1900 ){
        geracao = 'Conhecida como a <strong>Geração Perdida<strong> (nascidos entre 1883 e 1900), sua geração nasceu no período da construção da Torre Eiffel e do surgimento da psicanálise. Seu nome foi criado por Gertrude Stein para se referir a artistas presentes na França nos anos finais da Primeira Guerra Mundial, fazendo de Paris seu centro de atividades literárias nos anos 20.';
        img.setAttribute('src', 'img/tower.jpg');
        
    }else if(ano >=1901 && ano <=1924 ){
        geracao='<strong>A sua geração é a Grandiosa</strong> (nascidos entre 1901 e 1924). Seu nome foi dado pelo escritor da NBC Tom Brokaw, que a admirava por seu desejo de fazer a coisa certa. A infância dessa geração testemunhou avanços tecnológicos como o telefone e a rádio. Essa geração perseverou em tempos difíceis de estresse econômico e guerras - nasceram aproximadamente no período em que eclodiu a Primeira Guerra Mundial, e muitos lutaram na Segunda. Mas também foi no período em que Santos Dumont levantou voo com o 14 Bis e quando aconteceu a Semana de Arte Moderna de 1922.'
        img.setAttribute('src', 'img/santos.dumont.jpg');

    }else if(ano >= 1925 && ano<=1945){
        geracao = "<strong>A sua geração é a Tradicional</strong>, ou Silenciosa (nascidos entre 1925 e 1945). Valores dessa geração incluem a família, lealdade, liderança autoritária, estilo conservador, pensamento lógico. Por outro lado, pessoas dessa geração criaram mais tarde a Bossa Nova e o Rock'n'Roll. Além disso, é a geração de pessoas precursoras das lutas pelos direitos civis de pessoas pretas, LGBTQI+ e das mulheres nos Estados Unidos, como Martin Luther King, Angela Davis, Hervey Milk e Malcom X. São percebidas como pessoas interessadas em comunicação direta e presencial em vez de via tecnologia.";
        img.setAttribute('src', 'img/king.jpg');
    }else if(ano>=1946 && ano<=1964){
        geracao = ' <strong>A sua geração é a dos "Baby Boomers"</strong>, nascidos entre 1946 e 1964 num contexto de alta de natalidade no pós-guerra. Pessoas dessa geração podem valorizar o status e o trabalho árduo para ascender profissionalmente (cunharam o termo "workaholics"). Tendem a permanecer durante muitos anos em uma empresa. No Brasil, ações marcantes dessa geração foram as lutas contra a ditadura, o machismo e o racismo. As mulheres começam a conquistar seu lugar nas empresas e ganham independência financeira.'
        img.setAttribute('src','img/ditadura.jpg');
    }else if(ano>=1965 && ano<=1980){
        geracao = '<strong>A sua geração é a X</strong> (pessoas nascidas entre 1965 e 1980). No Brasil, essa geração nasceu durante a ditadura e testemunhou o seu fim. As tecnologias estavam avançando rapidamente, mas não estavam tão disponíveis em comparação com as gerações seguintes. Por isso, pessoas da geração X podem ser capazes de transitar com facilidade entre o mundo digital e o não-digital, valorizando ambos. Sua educação foi voltada para resolverem problemas usando lógica e engenhosidade. Trazem novos moldes para o conceito de família.';
        img.setAttribute('src', 'img/genx.jpg');
        res.innerHTML =`Foto: Fernando Lavin`;

    }else if(ano>=1981 && ano<=1995){
        geracao = '<strong>A sua geração é a Y </strong>. Também conhecida como a dos "Millenials" (nascidos entre 1981 e 1995), é a primeira geração de nativos digitais. Por terem acesso mais fácil à informação, tendem a sentir-se mais autossuficientes. Valorizam a diversidade nas organizações, onde almejam não só fazer a diferença, mas também ter realização pessoal. São percebidos como questionadores de autoridade por gerações que os antecedem. Em 2021, têm sido alvo de crítica da geração Z, que se refere a determinados comportamentos dessa geração como "cringe" (qualquer coisa considerada estranha pelos mais jovens; "uó", "mico").';
        img.setAttribute('src', 'img/geny.jpg');

    }else if(ano>=1996 && ano<=2009){
        geracao = '<strong>A sua geração é a Z </strong>(nascidos entre 1996 e 2009). Com a popularização da internet, essa geração tem bastante intimidade com a tecnologia e o meio digital, tendo crescido jogando videogames. São percebidos como uma geração que tem dificuldade de criar vínculos duradouros e costumam se relacionar nas redes sociais, evitando sair de casa. As desigualdades sociais são bastante evidentes neste ano de 2021, tanto na geração Y como na Z: enquanto uns usam tecnologia para ter mais conforto, outros a utilizam para trabalhar num contexto de precarização do emprego e de leis trabalhistas. Além disso, o compartilhamento das vidas pessoais nas redes sociais digitais mostram, em maior escala do que no passado, os espaços aos quais as classes sociais menos privilegiadas não podem ter acesso.'
        img.setAttribute('src', 'img/genz.jpg')
        
    }
    
    else if(ano>=2010){
        geracao = '<strong>A sua geração é a Alpha<strong> (nascidos a partir do ano de 2010). Em 2021, ainda são crianças, e por isso suas características geracionais só serão percebidas daqui a alguns anos. Porém, acredita-se que serão orientados à família, assim como o são aqueles que os criam, os da geração X e Y.'
        img.setAttribute('src', 'img/alpha.jpg');

    }else{
        geracao = 'Opa! Parece que faltou digitar o ano ou ainda não foram atribuídas características geracionais às pessoas do ano que você digitou. Tente novamente, a partir de 1883 ;-)'
    }

    res.style.textAlign="center";
    res.innerHTML = `${geracao}`;
    res.appendChild(img);
}


/*Créditos das imagens

Background
"Group of people" - https://freesvg.org/group-of-people

Geração Perdida
"torre arquitetura marco" - Imagem de Edi Nugraha por Pixabay 
https://pixabay.com/pt/photos/torre-arquitetura-marco-estrutura-103417/ 
Imagem de <a href="https://pixabay.com/pt/users/edinugraha-30562/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=103417">Edi Nugraha</a> por <a href="https://pixabay.com/pt/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=103417">Pixabay</a>

Geração Grandiosa 
"14 BIS - Santos Dumont" - https://www.flickr.com/photos/portalfab/7561732108

Geração Tradicional
Foto de Gotta Be Worth It no Pexels
https://www.pexels.com/pt-br/foto/estatua-de-granito-do-lider-do-movimento-pelos-direitos-civis-em-ceu-nublado-5214881/

Baby Boomer
Reprodução e partilha não comerciais:
https://s2.qwant.com/thumbr/474x272/4/d/1dc2cba773fe92f66c8ba2e5d185dcb1f745ee382ef188c16f392ba410c186/th.jpg?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-W8j5PVF3hpKb4l6RznR9gHaEQ%26pid%3DApi&q=0&b=1&p=0&a=0

Geração X
"blue and red cassete tape" - Photo by Fernando Lavin on Unsplash
https://unsplash.com/photos/o2XccNEJQLw 
Photo by <a href="https://unsplash.com/@filmlav?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fernando Lavin</a> on <a href="https://unsplash.com/s/photos/the-90s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Geração Y
Foto de John Diez no Pexels
https://www.pexels.com/pt-br/foto/afro-namorado-despreocupado-feliz-7389107/

Geração Z 
Foto de Anna Shvets no Pexels
https://www.pexels.com/pt-br/foto/acessorio-afro-traje-vestimenta-5325943/

Geração Alpha - Foto de Monstera no Pexels
https://www.pexels.com/pt-br/foto/adulto-apartamento-descalco-pe-descalco-7114188/

*/
