function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2 ;

}

var aluno = {
    nome :"igor",
    notas : [9,8],

    media : calcMedia
}

var aluno1 = {
    nome : "joao",
    notas : [5, 8 ] , 
    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media());

calcMedia();