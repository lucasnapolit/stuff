



const usuario = [
    { "name": "lucas" },
    { "nickname": "sas_mafia" }
]

const amigos = [
    { name: "juan", nickname: "V3gador" },
    { name: "agustin", nickname: "morzi" },
    { name: "david", nickname: "tidus" },
    { name: "diego", nickname: "capuchino" }
    { name: "lucas ", nickname: "sas_mafia" }

]

let output = ""
for (i = 0; i < amigos.length; i++) {
    output = output + `<ul>${amigos[i].name} - ${amigos[i].nickname}</ul>`
}
document.getElementById("people").innerHTML = output

function saludar(nombre){
    alert ( "hola " + nombre)

}
function obtenerNombre (fn) {
    const nombre = prompt("introdusca el nombre")
    fn(nombre)
}
obtenerNombre(saludar)


const num = [1,2,3,4,5,6]
function recorrer (numero){
    console.log(numero)
}
num.forEach(recorrer)

const amigosdelucas = [

    {nombre:"emiliano sanders",ciudad:"torcuato"},
    {nombre:"federico dantono",ciudad:"BAas"},
    {nombre:" tomas landa",ciudad:"MORON"}

]
function recorrerAmigos (amigos){
    console.log(amigos.ciudad)
}
amigosdelucas.forEach(recorrerAmigos)

const shemales = [
    {nombre:"cloye",apellido:"niidea",boobssize:"small",dicksize:"small",isAshemale:"yes"},
    {nombre:"ren",apellido:"noneoneknows",boobssize:"big",dicksize:"meddium",isAshemale:"yes"},
    {nombre:"babara",apellido:"niidea",boobssize:"Damnbig",dicksize:"huge",isAshemale:"yes"}
]

function recorrerShemales (dickgirls){
    console.log(dickgirls)
}

shemales.forEach(recorrerShemales)
 let resultado = ""
    for (i = 0; i < shemales.length; i++){
        resultado = resultado + `<ul>${shemales[i].nombre}-${shemales[i].boobssize}-${shemales[i].dicksize}-${shemales[i].isAshemale}</ul>`
        
    }

document.getElementById("shemales").innerHTML = resultado


