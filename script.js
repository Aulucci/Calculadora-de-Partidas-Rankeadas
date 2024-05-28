let vitoria = 150
let derrota = 45
let nivel = ""
let saldo = vitoria - derrota

function saldoVitorias(vitoria, derrota){
    
        if (saldo <= 10){
            nivel = "Ferro"
        } else if (saldo <= 20){
            nivel = "Bronze"
        } else if (saldo <= 50){
            nivel = "Prata"
        } else if (saldo <= 80){
            nivel = "Ouro"
        } else if (saldo <= 90){
            nivel = "Diamante"
        } else if (saldo <= 100){
            nivel = "Lendário"
        } else if (saldo >= 101) {
            nivel = "Imortal"
        }  
         
        console.log("O Herói tem saldo de " + saldo + " vitórias e esta no nível " + nivel + "!" )     
}

saldoVitorias(vitoria, derrota)

