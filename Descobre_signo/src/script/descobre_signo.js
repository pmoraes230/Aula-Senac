function verificarSigno() {
    var data = document.getElementById('dataNascimento').value;
    var partesData = data.split('-');
    var dia = parseInt(partesData[2]);
    var mes = parseInt(partesData[1]);
    var signo;

    switch (mes) {
        case 1:
            if (dia <= 20) {
                signo = 'Capricórnio';
            } else {
                signo = 'Aquário';
            }
        break;
        case 2:
            if (dia <= 18) {
                signo = 'Aquário';
            } else {
                signo = 'Peixe'
            }
        break
        case 3:
            if (dia <= 20) {
                signo = 'Peixe';
            } else {
                signo = 'Áries'
            }
        break
        case 4:
            if (dia <= 20) {
                signo = 'Áries';
            } else {
                signo = 'Touro'
            }
        break
        case 5:
            if (dia <= 20) {
                signo = 'Touro';
            } else {
                signo = 'Gêmeos'
            }
        break
        case 6:
            if (dia <= 20) {
                signo = 'Gêmeos';
            } else {
                signo = 'Câncer'
            }
        break
        case 7:
            if (dia <= 22) {
                signo = 'Câncer';
            } else {
                signo = 'Leão'
            }
        break
        case 8:
            if (dia <= 22) {
                signo = 'Leão';
            } else {
                signo = 'Virgem'
            }
        break
        case 9:
            if (dia <= 22) {
                signo = 'Virgem';
            } else {
                signo = 'Libra'
            }
        break
        case 10:
            if (dia <= 22) {
                signo = 'Libra';
            } else {
                signo = 'Escorpião'
            }
        break
        case 11:
            if (dia <= 21) {
                signo = 'Escorpião';
            } else {
                signo = 'Sargitário'
            }
        break
        case 11:
            if (dia <= 21) {
                signo = 'Sargitário';
            } else {
                signo = 'Capricónio'
            }
        break
    }

    document.getElementById('resultado').innerHTML = ' Seu Signo é: ' + signo
}

function excluirItemSelecionado() {
    var itens = document.getElementById('itens');
    if (itens.selectIndex == -1) {
        alert('Selecione um item na lista!');
        return;
    }
    var indice = itens.selectIndex;
    var itemSelecionado = itens.options[indice].text;

    var resultado = confirm('deseja excluir o item ' + itemSelecionado + ' ?');
    if (resultado) {
        itens.remove(indice);
        alert('O item ' + itemSelecionado + ' foi removido da lista!');
    } else {
        alert('Você cancelou a exclusão do item ' + itemSelecionado + '.')
    }
}

function adicionarItem() {
    var novoItem = prompt('Digite o novo item')
    if (novoItem) {
        var itens = document.getElementById('itens');
        var options = document.createElement('option')
    options.text = novoItem
    itens.add(options)
    alert('O item ' + novoItem + ' foi adicionado')
    }
}

function classToggle() {
    const navs = document.querySelectorAll('.Navbar_Items')
    navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'))
}

document.getElementById('btnVerificarSigno').onclick = verificarSigno
document.getElementById('btnExcluirItem').onclick = excluirItemSelecionado
document.getElementById('btnAdicionarItem').onclick = adicionarItem

document.querySelector('.Navbar_link_toggle').addEventListener('click', classToggle);