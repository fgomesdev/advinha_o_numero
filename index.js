
let tentativas = 0
let number = Math.floor(Math.random() * 100) + 1

function tentar()
{
let numero = Number(document.getElementById(`numero`).value)
let resultado = document.getElementById(`resultado`)
if(numero > 100 || numero <= 0)
{
    resultado.innerHTML = `O NUMERO ESTA ENTRE 1 E 100, TENTE NOVAMENTE`
    return
}

tentativas += 1
 if (numero == number) {
        resultado.innerHTML = `Você acertou! O número era ${number}. Você precisou de ${tentativas} tentativas.`;
    } else if (numero < number) {
        resultado.innerHTML = `Errou! O número secreto é MAIOR. (Tentativa ${tentativas})` ;
    } else if (numero > number){
        resultado.innerHTML = `Errou! O número secreto é MENOR. (Tentativa ${tentativas})`;
    }
}