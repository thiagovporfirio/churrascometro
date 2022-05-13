// carne - 500grs por pessoa  +de 6 horas +750grs
// cerveja - 2100ml por pessoa +6 horas +2800ml
// refrigerante/agua - 500ml por pessoa +6horas +1000ml
// criancas valem por 1/2 pessoa 0,5


let inputAdult = document.getElementById("adult")
let inputKid = document.getElementById("kid")
let inputDuration = document.getElementById("duration")

let resultado = document.getElementById("resultado")

function calcular(){
    let adultos = inputAdult.value
    let criancas = inputKid.value
    let duracao = inputDuration.value
    
    let qtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtTotalCerveja = cervejaPP(duracao) * adultos;
    let qtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
  
    resultado.innerHTML = `<p>${qtTotalCarne / 1000}kg de Carne</p>` 
    resultado.innerHTML += `<p>${Math.ceil(qtTotalCerveja / 350)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtTotalBebidas / 2000)}L de Refrigerante ou (Agua)</p>` 
}



function carnePP(duracao){

    if (duracao >= 6){
        return 750;
    }
    else {
        return 500;
    }
}

function cervejaPP(duracao){

    if (duracao >= 6){
        return 2800;
    }
    else {
        return 2100;
    }
}

function bebidasPP(duracao){

    if (duracao >= 6){
        return 1000;
    }
    else {
        return 500;
    }
}

let aparecer = document.getElementById("comofunciona")

function ape(){

    aparecer.innerHTML = `<div class="ss">
    <p><strong>Carne</strong> = 500g por pessoa, se a duração for maior que 6 horas = 750g por pessoa;<br>
    <strong>Cerveja</strong> = 6Latas por pessoa, se a duração for maior que 6 horas = 8Latas por pessoa;<br>
    <strong>Refrigerante ou Agua</strong> = 500 ml por pessoa, se a duração for maior que 6 horas = 1Litro por pessoa;<br>
    <strong>Crianças os parâmetros são metade dos adultos 1/2;</strong></p>
    </div>`

}
