//constante que recebe o nome e o xp do heroi
const herois = [
    {nome: "Sejuani", xp: 1000},
    {nome: "Akali", xp: 1001},
    {nome: "Kalista", xp: 2001},
    {nome: "Neeko", xp: 5001},
    {nome: "Yone", xp: 7001},
    {nome: "Rumble", xp: 8001},
    {nome: "Draven", xp: 9001},
    {nome: "Vi", xp: 10001}
]

//for que percorre todo o o tamanho do array herois
for(let i=0; i < herois.length; i++){
    //variável que recebe o array 
    let heroi = herois[i];

    //variável para armazenar o nível do herói
    let nivelHeroi = '';

    //estrutura de decisao 'if' para ranquear o nível do herói
    if(heroi.xp <= 1000){
        nivelHeroi = 'Ferro'
    }else if(heroi.xp >= 1001 && heroi.xp <= 2000){
        nivelHeroi = 'Bronze'
    }else if(heroi.xp >= 2001 && heroi.xp <= 5000){
        nivelHeroi = 'Prata'
    }else if(heroi.xp >= 5001 && heroi.xp <= 7000){
        nivelHeroi = 'Ouro'
    }else if(heroi.xp >= 7001 && heroi.xp <= 8000){
        nivelHeroi = 'Platina'
    }else if(heroi.xp >= 8001 && heroi.xp <= 9000){
        nivelHeroi = 'Ascendente'
    }else if(heroi.xp >= 9001 && heroi.xp <= 10000){
        nivelHeroi = 'Imortal'
    }else if(heroi.xp >= 10001){
        nivelHeroi = 'Radiante'
    }

    //mostra o nome e o nível em que o herói está
    console.log("O herói de nome: " + heroi.nome + " está no nível de " + nivelHeroi);

    
}

console.log("Heróis classificados com sucesso!")

