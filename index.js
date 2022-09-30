const url = 'https://bancocrud-back-production.up.railway.app/'

function info () {
 fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
}

console.log(info());

async function dataSent(){
    let nome = await nomeFicticio.value;
    let email = await emailExample.value;
    let cor = await corFav.value;
    let estacao = await estacaoFav.value;
    let comida = await comidaFav.value;

    if(!nome || !email || !cor || !estacao || !comida){
        alert('Favor completar todos os dados.')
    }
    else
    {  
        let dados = {
            nome: nome,
            email: email,
            cor: cor,
            estacao: estacao,
            comida: comida
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(alert('Dados cadastrados com sucesso!'))
        .then(location.reload())
        .catch(e => console.log(e.message))
}
}

function limpaCorpoTabela(){
    while(bodyTable.firstChild){
    bodyTable.removeChild(bodyTable.firstChild);
}
}

async function dataSearch(){
    let email = emailSearch.value;

    limpaCorpoTabela();

    if(!email){
        alert('Por favor preencher email.')
    } else {
        fetch(`${url}email/${email}`)
        .catch(e => alert(e.message))
        .then(res => res.json())
        .then(data => {
            let dado = JSON.stringify(data)
            if(dado == '[]'){
                alert('Email não cadastrado')
            } else {
                const nomeT = document.createElement('td');
                const emailT = document.createElement('td');
                const corT = document.createElement('td');
                const estacaoT = document.createElement('td');
                const comidaT = document.createElement('td');
                
                const nome = document.createTextNode(data[0].nome);
                const email = document.createTextNode(data[0].email);
                const cor = document.createTextNode(data[0].cor);
                const estacao = document.createTextNode(data[0].estacao);
                const comida = document.createTextNode(data[0].comida);

                nomeT.appendChild(nome);
                emailT.appendChild(email);
                corT.appendChild(cor);
                estacaoT.appendChild(estacao);
                comidaT.appendChild(comida);
                
                bodyTable.appendChild(nomeT)
                bodyTable.appendChild(emailT)
                bodyTable.appendChild(corT)
                bodyTable.appendChild(estacaoT)
                bodyTable.appendChild(comidaT)
                console.log(nome,email,cor,estacao,comida);
            }
        })
            
    }
}
