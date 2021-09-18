 function calcMedia (){
    return (this.notas[0] + this.notas[1]) / 2 ;
}

var aluno = {
    nome :'Diego',
    notas: [7,8],


    media : calcMedia
    }
}
var aluno1 = {
    nome : "jão" , 
    notas : [6,8]

    media : calcMedia   }
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))



