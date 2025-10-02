function Q(){
    let nom = prompt ("Como quieres llamarte")
    document.getElementById("Nom").innerHTML ="NOM: "+nom;
}
function Q1(){
    let foto = prompt ("Que quieres ser?")
    document.getElementById("foto").src = foto
}
function Q4(){
if(document.getElementById("foto").hidden == true){
    document.getElementById("foto").hidden =false
}else{
    document.getElementById("foto").hidden = true
}
}