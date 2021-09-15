// if .. else

//se na hr estiver entre 06:00 ate 12:00 : Bom dia !
// se estiver entre 12:00 ate 18:00 : ba tarde!
// Cas cntrari : Ba nitte!
var hr = 22;

if (hr > 6 && hr < 12) {
    console.log("ba dia")
}
else if (hr > 12 && hr < 18){
    console.log("ba tarde") ;
}
else {
    console.log ("ba nite")
}