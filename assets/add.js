// B1

let number = +prompt ("Введите ваше чисто");
let isPrime = true;
for (let i=2; i<number; i++) {
    if (number%i == 0) {
        alert (`Число ${number} - не простое`)
        isPrime = false;
        break;
    }
}
if (isPrime) {
    alert (`Число ${number} - простое`)
}

// B2

for (let i=3; i<1000; i++) {
    let Prime = true;
    for (let j=2; j<i; j++) {
        if (i%j == 0) {
            Prime = false;
            break;
        }
    }
    if (Prime) {
        console.log (`Число ${i} - простое`)
    }
}