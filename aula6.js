//funções
function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2) / 2
    return " a media e " + media
}
console.log(calcularMedia(10, 4))

const furia = ["falleN", "molodoy", "KSCERATO", "yuurih", "YEKINDAR"]

function mostrarTime(){
let indice = 0 
while(indice < furia.length){
    console.log(furia[indice])
    indice++
    }
}
mostrarTime()