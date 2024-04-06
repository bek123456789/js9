let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gulijon', 'mashina'];

let ichkarisidagi = [];
let tashqarisi = [];

for (let word of letterSearch) {
    if (word.includes('n')) {
        ichkarisidagi.push(word);
    } else {
        tashqarisi.push(word);
    }
}

console.log("N si bor sozlar", ichkarisidagi);
console.log("N si yoq sozlar" , tashqarisi);
