let valores = [8, 1, 7, 4, 2, 9]

// for (let x = 0; x < valores.length; x++) {
//     console.log(`A posição ${x} tem o valor ${valores[x]}`)
// }

for (let x in valores) {
    console.log(`A posição ${x} tem o valor ${valores[x]}`)
}