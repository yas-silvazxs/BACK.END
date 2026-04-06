//- Crie uma função para adicionar um novo elemento na lista
//- Crie uma função para filtrar os dados por preço (exemplo: preço<100)
//- Crie uma função para aplicar com desconto em todos os produtos

const livros = require("./ler.json")


// Criando um arquivo JSON
function criaArquivo(obj){
   const dadosJSON = JSON.stringify(obj)
   const fs = require("fs")
   fs.writeFileSync("ler.json", dadosJSON)
}

//criaArquivo(ler)


function mostrarlivros(listas){
    console.log("-----estoques de livros-----")
    listas.forEach((livro)=> {
        console.log(livro.titulo + "--" +
                    livro.autor + "- ano: " +
                    livro.ano + "- pag: " +
                    livro.paginas + "- preco: " +
                    livro.preco.toFixed(2).replaceAll(".",","))
        console.log("sinopse: "+livro.sinopse) 
        console.log ("-------------------------------------------------------------------------")

    })
}
mostrarlivros(livros)

function addlivros(titulo, autor, ano, paginas, preco, sinopse ){ 
    livros.push({
        titulo: titulo,
        autor: autor,
        ano: ano,
        paginas: paginas,
        preco: preco,
        sinopse: sinopse
         
    })
} 

addlivros("O Iluminado (The Shining)","Stephen King", 1977, 464, 80, "O filme O Iluminado (The Shining), dirigido por Stanley Kubrick e lançado em 1980, é um clássico do terror psicológico baseado no livro homônimo de Stephen King.")














