function focarInput(){
    document.getElementById('inputTerminal').focus();
}
function attShowInput(){
    document.getElementById('userInput').innerText = document.getElementById('inputTerminal').value;
}

function sendResponse(){
    let entrada = document.getElementById('inputTerminal');
    switch (entrada.value){
        case 'rs -help':
            showHelp();
            break;
        case 'rs -inicio':
            showInicio();
            break;
        case 'rs -sobre':
            showSobre();
            break;
        case 'rs -links':
            showLinks();
            break;
        case 'rs -formacao':
            showFormacao();
            break;
        case 'rs -experiencia':
            showExperiencia();
            break;
        case 'rs -trabalho':
            showTrabalho();
            break;
        case 'rs -contato':
            showContato();
            break;
        case 'rs -cls':
            showCls();
            break;

        default:
            showErro();
    }
    entrada.value = "";

}

function showHelp(){
    let texto = document.getElementById('info');
    texto.innerHTML = texto.innerHTML +
        "perfilRamon@console: ~$ rs -help " +
        "<br>Lista de Comandos:" +
        "<br>\"rs -inicio\" -> Mostra informações da pagina inicio" +
        "<br>\"rs -sobre\" -> Mostra informações da pagina sobre" +
        "<br>\"rs -links\" -> Mostra informações da pagina links" +
        "<br>\"rs -formacao\" -> Mostra informações da pagina formação" +
        "<br>\"rs -experiencia\" -> Mostra informações da pagina experiência" +
        "<br>\"rs -trabalho\" -> Mostra informações da pagina trabalho" +
        "<br>\"rs -contato\" -> Mostra informações da pagina contato" +
        "<br>\"rs -cls\" -> apaga toda a informação na tela do terminal" +
        "<br>\"rs -help\" -> lista os comandos<br><br>";
    let objDiv = document.getElementById("terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function showInicio(){
    let texto = document.getElementById('info');
    texto.innerHTML = texto.innerHTML +
        "perfilRamon@console: ~$ rs -inicio <br>" +
        "Olá mundo! <br> Esta é uma pagina pessoal de apresentação com um formato um pouco diferente, vamos lá que vou lhe apresentar <br>" +
        "Pense nisto como um terminal logo pode interagir utilizando comandos, pode verificar os comandos a qualquer" +
        "<br> momento usando o comando: rs -help <br>" +
        "Todos os comandos são precedidos por rs, e o que você consegue interagir neste terminal são as sessões do menu ao lado" +
        "<br>" +
        "Ou seja use por exemplo rs -Sobre para acessar a aba sobre ou só click no menu o que achar mais divertido<br><br>"
    let objDiv = document.getElementById("terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
}
function showSobre(){
    let texto = document.getElementById('info');
    texto.innerHTML = texto.innerHTML +
        "perfilRamon@console: ~$ rs -sobre" +
        "<br>Sou uma pessoa simplesmente apaixonada por tecnologia e inovação, para o laser não vejo nada melhor que " +
        "animes e jogos, aprender algo novo também sempre é fascinante e provavelmente uma das coisas que mais " +
        "me chamou a atenção na programação foi justamente isso, o fato de sempre precisar aprender algo novo e " +
        "não me sentir estagnado o que seria provavelmente um dos meus maiores pesadelos.<br><br>";
    let objDiv = document.getElementById("terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function showLinks(){
    let texto = document.getElementById('info');
    texto.innerHTML = texto.innerHTML +
        "perfilRamon@console: ~$ rs -links" +
        "<br><a href=\"https://www.linkedin.com/in/ramon-sousa-69b398192/\" target=\"_blank\">LinkedIn</a>"+
        "<br><a href=\"https://github.com/ramon-so\" target=\"_blank\">GirHub</a><br><br>";
    let objDiv = document.getElementById("terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function showFormacao(){
    let texto = document.getElementById('info');
    texto.innerHTML = texto.innerHTML +
        "perfilRamon@console: ~$ rs -formacao" +
        "<br><h1>Analise e desenvolvimento de sistemas</h1>"+
        "Fatec Ferraz de Vasconcelos" +
        "<br>Inicio: 02/2020 - Fim: 12/2022" +
        "<br>Descrição do curso: " +
        "<br>O Tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta " +
        "e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, " +
        ">equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens " +
        "de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade " +
        "e segurança de programas computacionais são fundamentais à atuação desse profissional.<br><br>";
    texto.innerHTML = texto.innerHTML +
        "<h1>Tecnico em eletronica</h1>"+
        "Etec Guaianases" +
        "<br>Inicio: 02/2012 - Fim: 12/2015" +
        "<br>Descrição do curso: " +
        "<br>O TÉCNICO EM ELETRÔNICA é o profissional que realiza o desenvolvimento de projetos de sistemas eletrônicos embarcados " +
        "aplicando tecnologia de circuitos microprocessados e microcontrolados, bem como semicondutores de potência e componentes " +
        "microeletrônicos. Implementa interfaces de automação com comandos eletromecânicos ou controladores lógicos programáveis " +
        "instalados em sistemas de controle de processos.<br><br>";
    let objDiv = document.getElementById("terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function showExperiencia(){
    let texto = document.getElementById('info');
    texto.innerHTML = texto.innerHTML +
        "perfilRamon@console: ~$ rs -experiencia" +
        "<br><h1>Analista de sistemas</h1>"+
        "Via Expressa Transporte e logistica" +
        "<br>Inicio: 06/2021 - Atual" +
        "<br>Descrição: " +
        "<br>Nesta nova etapa da minha carreira continuo responsavel por projetos sozinho porém também recebi uma equipe com " +
        "estagiarios para que possa desenver suas habilidades, no momento todos os projetos de desenvolvimento emergenciais " +
        "ou que precisam de uma confiabilidade alta na empresa estão sob minha responsabilidade, atuo com maior frequencia no " +
        "desenvolvimento web porém também crio soluções para outras plataformas.<br><br>";
    texto.innerHTML = texto.innerHTML +
        "<h1>Estagio em análise de sistemas</h1>"+
        "Via Expressa Transporte e logistica" +
        "<br>Inicio: 03/2020 - Fim: 06/2021" +
        "<br>Descrição: " +
        "<br>Atuava com a criação de sistemas assumindo desde de cedo projetos inteiros que precisavam ser coordenados " +
        "desde seu inicio até o final, no inicio foi um pouco complicado devido a minha própria falta de conhecimento " +
        "na gestão de projetos porém graças a isto consegui desenvolver justamente as habilidades nescessarias " +
        "para assumir tal responsabilidade.<br><br>";
    let objDiv = document.getElementById("terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function showTrabalho(){
    let texto = document.getElementById('info');
    texto.innerHTML = texto.innerHTML +
        "perfilRamon@console: ~$ rs -experiencia" +
        "<br>Na maior parte do tempo estou trabalhando como full-stack construindo o código da aplicação em si, porém " +
        "também cuido de assunstos como analise de requisitos, modelagem do banco de dados, construção do ambiente " +
        "entre outras obrigações.\n" +
        "Dentre os projetos que já construi o que gostaria de destacar é o Safira, ele representa um sistema " +
        "de gerenciamento das coletas realizadas pela transportadora em que trabalho, com ele você consegue gerar " +
        "solicitações de coleta para outras bases, acompanhar o status e posteriormente rastrear a coleta além de " +
        "gerenciar questões como pagamento de imposto e gerar relatórios para as areas administrativas da empresa.<br><br>";
    let objDiv = document.getElementById("terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function showContato(){
    let texto = document.getElementById('info');
    texto.innerHTML = texto.innerHTML +
        "perfilRamon@console: ~$ rs -contato" +
        "<br>Email: Ramon.sousa1997@outlook.com" +
        "<br>Telefone: +55 (11) 99442-8533<br><br>";
    let objDiv = document.getElementById("terminal");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function showCls(){
    let texto = document.getElementById('info');
    texto.innerHTML = "";
}

function showErro(){
    let inp = document.getElementById('inputTerminal').value;
    let texto = document.getElementById('info');
    if (inp.indexOf('rs ') > -1){
        texto.innerHTML = texto.innerHTML +
            "perfilRamon@console: ~$ " + inp +
            "<br>'"+inp+"' Argumento não encontrado verifique na lista!<br>" ;
        showHelp();
    }else{
        texto.innerHTML = texto.innerHTML +
            "perfilRamon@console: ~$ " + inp +
            "<br>'"+inp+"' não é reconhecido como um comando interno<br>" +
            "ou externo, um programa operável ou um arquivo em lotes.<br><br>";
        let objDiv = document.getElementById("terminal");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

}