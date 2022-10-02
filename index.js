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



async function dataSearch(){
    let email = emailSearch.value;


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
                tableName.textContent = data[0].nome
                tableEmail.textContent = data[0].email
                tableColor.textContent = data[0].cor
                tableSeason.textContent = data[0].estacao
                tableFood.textContent = data[0].comida
               
            }
        })
            
    }
}
