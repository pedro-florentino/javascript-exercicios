let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let nsearch = 3
let pos = num.indexOf(nsearch)
if (pos == -1) {
    console.log(`O valor ${nsearch} não foi encontrado!`)
} else {
    console.log(`O valor ${nsearch} está na posição ${pos}`)
}