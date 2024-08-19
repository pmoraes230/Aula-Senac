let n1 = parseFloat(prompt('Digite a primeira nota: '))
let n2 = parseFloat(prompt('Digite a segunda nota: '))

let media = (n1 + n2) / 2

alert('Esta aprovado? ' + (media > 4 && n1 > 0 || n2 > 0))