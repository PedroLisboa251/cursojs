// let i = 0;
//
// while (i <= 10) {
//     console.log(i);
//     i++
// }

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)
}

do {
    rand = random(min, max);
    console.log(rand)
} while (rand !== 10);