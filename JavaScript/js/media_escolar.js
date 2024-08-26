let nota1 = parseFloat(prompt('Digite a primeira nota: '))
let nota2 = parseFloat(prompt('Digite a segunda nota: '))

if(nota1 <= 10 && nota2 <= 10 && nota1 >= 0 && nota2 >= 0){ // verificação de notas ente 0 e 10
    let media = (nota1 + nota2) / 2
    if (media >= 6 && nota1 > 0 && nota2 > 0) {
        //bloco aprovado
        alert('Aprovado!')
    } else {
        // falso
        alert('Reprovado, vá estudar')
    }
} else { // Caso primero if seja errado
    alert('Digite números apenas entre 0 a 10')
}

