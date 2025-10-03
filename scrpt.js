function Q(){
    let nom = prompt ("Como quieres llamarte")
    document.getElementById("Nom").innerHTML ="NOM: "+nom;
}
function Q1(){
    let foto = prompt ("Que quieres ser?")
    document.getElementById("foto").src = foto
}
function canvifons(){

let body = document.getElementsByTagName("body")[0]
let foto = prompt("Donde quieres viajar?")
body.style = "background-image: url('"+foto+"'); background-size: cover;";
}
function Q3(){
let body = document.getElementsByTagName("body")[0]
body.style = "font-family: 'Times New Roman', Times, serif;"

}
function Q5(){
let llista = document.getElementById("expL");
let element = document.createElement("li");
element.innerHTML = prompt ("Que vols Afegir")
llista.appendChild(element)


    
}

function Q4(){
if(document.getElementById("foto").hidden == true){
    document.getElementById("foto").hidden =false
}else{
    document.getElementById("foto").hidden = true
}
}