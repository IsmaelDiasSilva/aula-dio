
let numero = prompt("Por favor, insira um número:");
console.log("Classificador de nivel do heroi")
let nome = "baka"
let QuantiXp = 1334

if(QuantiXp < 1000 ){
    var nivel = "Ferro" 
    console.log("O Heroi de nome",nome,"está no nivel de ",nivel)
}else 
if(QuantiXp > 1000 && QuantiXp < 2001){
    var nivel = "Bronze"
    console.log("O Heroi de nome",nome,"está no nivel de ",nivel)
}
if(QuantiXp > 2000 && QuantiXp <= 5000 ){
    var nivel = "Prata"
    console.log("O Heroi de nome",nome,"está no nivel de ",nivel)
}else
if(QuantiXp > 6000 &&  QuantiXp < 7001){
    var nivel = "Ouro"
    console.log("O Heroi de nome",nome,"está no nivel de ",nivel)
} 
if(QuantiXp > 7000 && QuantiXp < 8001){
    var nivel = "Platina"
    console.log("O Heroi de nome",nome,"está no nivel de ",nivel)
}else 
if(QuantiXp > 8000 && QuantiXp < 9001){
    var nivel = "Ascendente"
    console.log("O Heroi de nome",nome,"está no nivel de ",nivel)
} 
if(QuantiXp > 9000 && QuantiXp < 10001){
    var nivel = "Imortal"
    console.log("O Heroi de nome",nome,"está no nivel de ",nivel)
}else 
if(QuantiXp >= 10000){
    console.log("O Heroi de nome",nome,"está no nivel de ",nivel)
    var nivel = "Radiante"

}

