var hora_atual = new Date()
var hora = hora_atual.getHours()
// var hora = 19
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 0 && hora <= 12) {
    console.log('Bom dia')
} else if (hora >= 13 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}