var Calculador = {
    // chama a função que faz o valor das entradas inputs com o valor das urbanas
    getTotal: (chave) => {
        let arryChaves = Calculador.getChave(chave)
        let total = Calculador.getTotalValorChaves(arryChaves, chave)
        return total
    },
    // inicia automaticamente quando o arquivo for lido 
    init: () => {     
        buttonsUrbsHtml.forEach(function(botao, index) {
            botao.addEventListener('click', function(evento) {
                let botaoAtual = evento.target
                let chaveInputBotao = Object.values(botaoAtual.dataset)[0]
                total = Calculador.getTotal(chaveInputBotao)
                pegarElementoHtmlNaLista('#res')['elementoHtml'].innerHTML= `<h2> U2 Remuneração aproximada de:  ${total.toFixed(2)} R$ </h2>`;
            })
        })
    },
    // pega a chave da urnaba com os valores
    getChave: function(chave) {
        let chaves = Object.keys(urbana[chave])
        return chaves
    },
    // metodo buscar os valores dos inputs e calcula com os valor das urbanas selecionada pelo button
    getTotalValorChaves: (arryChaves, chave) => {
        let inputs = [] 
        let inputskeys = ["#uv","#aq","#ap","#bq","#bp"]
        for (let i=0; i < inputskeys.length; i++){
            let input = pegarElementoHtmlNaLista(inputskeys[i])["elementoHtml"]
            if (!input.value) { // se qualquer input estiver vazio '' não há como fazer calculo
                return 0
            }
            inputs.push(input)
        }
    
        let total = 0
        arryChaves.forEach((el, index) => {
            total +=  parseFloat(inputs[index].value) * parseFloat(urbana[chave][el])
        }) 
        
        return total
    }
}
    