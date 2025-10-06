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

 function Q7{

 if (Q7=='1'){
  } else{
<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDw8PDQ0NFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDB//EABoQAQEBAQEBAQAAAAAAAAAAAAABERIC8CH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9jhghAkECQQSSACmigKDQAqSAJIEkgSSBBICgQJgMApIECAApFAVmtVmgyiAdiCBIIEhAUkABACg1kECAISBJIEkASSAoECYIQKSBAgEzSKArNarNABIHaGAgSCBQIFAgAaAFBrIIEAkkCQQEJAkkCIMAkEEQgIIACkUBWaaKDKSB1MEIEggSEBSQAEAAaACQAhIEkAISBJICWTAaLJApIEkAQLNAVmtVmgEEDrCIQaLMIEhAUkCCQCsmgAkASCAoICEgSSAllqASCBQQEIAhUAFFNZoBAg6QxmEGiy0BIQFJAgkArNaZoAEAgkCQQFBAUCBhjLUAwiECggSQBM01mgqzSzaALJB0hjErUBvSw1AaQQNIICEAQpAMg0UAkASQAoICQgahjLUAkRAUgBFQBVmrRaAoqrNoJBA6SmVhqUG5TKxp0G4WYQaTOkCggQqFAUU1mgggBGhAVoQNFkg0YyQaQQNDQtBDUNBVm1Wi0FWarWbQWpnUDpK1K5ytSg3K1K5ytaDenWJToNrWdOg1qZ1aBFCAaKqKCCAEBaBQQNFkg0WUDR1lA1o0DQOjVrNoG1m1Ws6CtZtVrNoFMagdJWpXKVqUHSVqVzlMoOkp1zla0G9OsatBvVrOrQaA0aBoGjQIFqBIICgtBos6tBos6tBvRrOrQa0aNGgbRaLWbQNrNotFoK1m1WsWg1oY378INytSuMrUoO0p1ylMoOsrWuWnQddOuUp0HTVrGrQdNGsatBrVrOjQatGs6Ogb0azq0GtWs6tBvVrGnQb1axq0G9WsaNBvRrFotBq0Ws6LQatZtZtZtBq1i+haxfQNanPSBnpqekganpqekgano9BAej0kB6PSQLpdJAuh0kA1aEC1dJAul0kB1dJAul0kA6V9BAuh0kA6ZvpIGb6ZvpIGb6ZvpIGekkD/9k="> </img> hidden == true
     
 }
}