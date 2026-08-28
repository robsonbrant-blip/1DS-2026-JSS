//LAÇO DE REPETIÇÃO FOR

//CONTAGEM REGRESSIVA
for (let i = 10; i >= 0; i--) {
    console.log(`${i}...`);
}

console.log("Foi...");
 
//CONTAGEM DE ESTRELAS
for (let i = 1; i <= 5; i++) {
    let estrelas = ("⭐".repeat(i));
}

const cartas = ["♠️","♥️","♦️","♣️"];

for(let i = 0; i<=2; i++) {
    const sorteada = cartas[Math.floor(Math.random() * cartas.length)];
    console.log(`Naipe ${i + 1}: ${sorteada}`);
}
