let n1 = 4;
let n2 = 7;

console.log(n1 + n2);
console.log(n1 * n2);
console.log(n1 - n2);
console.log(n1 / n2);
console.log("Sobra par", (n1 % 2));
console.log("Sobra impar", (n2 % 2));

n3 = 5;
let result = (n3 % 2);

if(result == 0){
    console.log(`O número ${n3} é par`)
}
else{
    console.log (`O número ${n3} é impar`)
}

n4 = '3'; // Número é declarado como string
if(typeof n4 != Number){
    console.log(`${n4} não é um número`);
}
else{
    let res2 = (n4 % 2);
    if (res == 0){
        console.log(`O número ${n4} é par`)
    }
    else{
        console.log(`O número ${n4} é impar`)
    }
}