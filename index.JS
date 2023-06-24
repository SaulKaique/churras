const calcular = () => {
    const adultosComAlcool = document.getElementById('adultosComAlcool').value; // Pega o valor do input de adultos com álcool
    const adultosSemAlcool = document.getElementById('adultosSemAlcool').value; 
    const criancas = document.getElementById('criancas').value; // Pega o valor do input de crianças
    const duracao = document.getElementById('duracao').value; 

    const carne = (adultosComAlcool * 0.5 + adultosSemAlcool * 0.4 + criancas * 0.2) * duracao; // Calcula a quantidade de carne necessária
    const cerveja = (adultosComAlcool * 1 + adultosSemAlcool * 0.5) * duracao; 
    const refrigerante = (adultosComAlcool * 0.5 + adultosSemAlcool * 1 + criancas * 1) * duracao; 
    const agua = (adultosComAlcool * 0.5 + adultosSemAlcool * 1 + criancas * 1) * duracao; // Calcula a quantidade de água necessária

    document.getElementById('carne').innerHTML = `${carne.toFixed(2)} kg`; // Mostra a quantidade de carne na tela
    document.getElementById('acompanhamentos').innerHTML = `Acompanhamentos: ${carne.toFixed(2)} kg de pão de alho, ${carne.toFixed(2)} kg de linguiça e ${carne.toFixed(2)} kg de queijo coalho.`; 
    document.getElementById('cerveja').innerHTML = `${cerveja.toFixed(2)} litros`; // Mostra a quantidade de cerveja na tela
    document.getElementById('refrigerante').innerHTML = `${refrigerante.toFixed(2)} litros`; 
    document.getElementById('agua').innerHTML = `${agua.toFixed(2)} litros`; // Mostra a quantidade de água na tela
}

document.getElementById('Calcular').addEventListener('click', calcular); // Adiciona um evento ao botão "Calcular"
