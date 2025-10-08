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



function Q6(){
    
 

 if(Q6=='1'){
   location.href ="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
   }
    else {
     location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
   }
 }

function Q7() {
  const foto = document.getElementById("foto");

  
  if (Q7 === '1') {
    foto.style.width = "50px";
  } else {
    foto.style.width = "200px";
  }
}
