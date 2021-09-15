const filme = {
    titulo : 'vingadores',
    ano : '2018',
    diretor : 'robin',
    personagem : 'thor'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
         if(typeof obj[prop] === 'stirng')
               console.log(prop,obj[prop]) 
}