

function rank(vitorias, derrotas){
    return vitorias - derrotas
}


let saldoVitorias = rank(19, 4)


switch (true){
    case saldoVitorias < 10:
         nivel = "Ferro";
        break
    case saldoVitorias >= 11 && saldoVitorias <= 20:
            nivel = "Bronze";  
        break  
    case saldoVitorias >= 21 && saldoVitorias <= 50:
            nivel = "Prata";  
        break   
    case saldoVitorias >= 51 && saldoVitorias <= 80:
            nivel = "Ouro";  
        break 
    case saldoVitorias >= 81 && saldoVitorias <= 90:
            nivel = "Diamante";  
        break 
    case saldoVitorias >= 91 && saldoVitorias <= 100:
            nivel = "Lendário";  
        break 
    default:
        nivel = "Imortal";
        break;           
}

console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de "+ nivel)