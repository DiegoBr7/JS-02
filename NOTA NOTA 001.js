var nota1 = 5.0 ;
var nota2 = 6.0 ;

var media = nota1 + nota2 ; 

var conceito = ""
 if (media >= 8){

    conceito = "otimo"
}
else if (media >= 6){

    conceito = "bom"
}
else {
    conceito = "regular"
}

console.log(media);
console.log(conceito);

switch (conceito) {
  case  "otimo" :
    console.log("parabens , continue assim")
      break;

  case "bom" :
    console.log("você está quase lá")
      break;
  case "regular" :
    console.log ("mais ou menos")  
      break;
  default :
    console.log("você errou")
      break;
    }
