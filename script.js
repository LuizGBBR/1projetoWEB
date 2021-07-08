// Variáveis utilizadas //
var lista_valores = [];
var soma = 0;
var last_number = 0
var salvar_valor = 0
var listataxas = []
var taxatotal = 0
var valorfinal = 0
var rendfinal = 0

//....................Função de adicionar e somar os preços..................//
function testeinput(){
    var somaingred = document.getElementById('ingredt_soma')
    somaingred.value = somaingred.value.replace("," , ".")
    var soma1 = Number(somaingred.value)
    lista_valores.push(soma1)
        for (let counter = 0; counter < lista_valores.length; counter++) {
        soma += lista_valores[counter]

    }
    teste37.innerHTML = lista_valores
    resultsoma.innerHTML = soma
    last_number = lista_valores[lista_valores.length-1]
    salvar_valor = soma
    soma = 0
}

//.....................Função de retirar os preços..................//
function retirar_valor(){
    if (salvar_valor > 0){
     salvar_valor = salvar_valor - last_number}
    lista_valores.pop()
    teste37.innerHTML = lista_valores
    resultsoma.innerHTML = salvar_valor
}

//........................Função de taxas sobre o valor somado dos preços..................//
function taxavalor() {
    var taxa_1 = document.getElementById('taxa1')
    var taxa_2 = document.getElementById('taxa2')
    var taxa_3 = document.getElementById('taxa3')
    listataxas = [Number(taxa_1.value), Number(taxa_2.value), Number(taxa_3.value)]
    for (let c = 0; c < 3; c++) {
        listataxas[c] = Number(((listataxas[c] / 100) * salvar_valor).toFixed(2))
        taxatotal = taxatotal + listataxas[c]}
        
    
    taxatotal = taxatotal + salvar_valor
    calculartaxa.innerHTML = taxatotal
}

//.....................Função de calcular o lucro em cima do preço e das taxas....................//
function lucro() {
    var taxalucro = document.getElementById('lucrotaxa')
    var taxlucro = Number(taxalucro.value)
    valorfinal = (taxlucro/100) * taxatotal
    salvar_valor = (taxatotal + valorfinal)
    valor_final.innerHTML = salvar_valor
}

//.....................Função de calcular o rendimento...................//
function calcrendimento () {
    var rendimento1 = document.getElementById('rendimento')
    var rend = Number(rendimento1.value)
    rendfinal = salvar_valor/rend
    rendiment.innerHTML = (rendfinal).toFixed(2)
}