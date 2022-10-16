var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) {
    //bloqueia o refresh da página.
    e.preventDefault()
    //Url da pesquisa.
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";
    //Valor do inpt name
    let nome = document.getElementById('name')
    //concatenar a url com o inputname
    urlForm = urlForm + this.name.value
    //tranforma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()
    //ID content
    let resposta = document.getElementById('content')
    //ID imgPokemon
    let imagem = document.getElementById('imgPokemon')
    //Resposta em HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data) {
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "' >"
        })

        .catch(function (err) {
            html = 'Pokémon não encontrado!😥'
            resposta.innerHTML = html
        })

});

function maiuscula(val) {
    return val[0].toUpperCase() + val.substr(1)
}