//lista
const tenishocks = ["flat lite black", "bold espectro", "pop lite classic black", "tempus extra black", "flat core", "montreal noturno", "puff preto refletivo", "ruas classic skate "]
const valores    = [      350.90     ,        499.99  ,           280.90        ,        250.90       ,    380.99  ,        310.99     ,            389.99     ,           350.99     ] 
let contador = 0 
while(contador < tenishocks.length){ 
    console.log(tenishocks[contador] + " - R$ " + valores[contador])
    contador = contador + 1 
}

tenishocks.push("RLX baggy")
valores.push(500)
console.log(tenishocks)