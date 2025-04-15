//criando um array pra conter as musicas e os caminhos para os elementos
let musicas =[
    {titulo:'Guitar solo',artista:'Matheus henrique',src:'musics/We Ride! - Reed Mathis.mp3',img:'imagens/rock.jpg'},

    {titulo:'Samba music',artista:'Bossa nova',src:'musics/Ella Vater - The Mini Vandals.mp3',img:'imagens/samba.jpg'},

    {titulo:'Piano music',artista:'Monroe arnold',src:'musics/A Brand New Start - TrackTribe (1).mp3',img:'imagens/piano.jpg'}
]

//Referência aos elementos HTML
let musica = document.getElementById('audio')
let buttonPause = document.getElementById('pause')
let barra = document.querySelector('progress')
let tempo = document.querySelector('#inicio')
let tempoFinal = document.querySelector('#fim')
let play = document.querySelector('#play')
let img = document.querySelector('#img')
let artista = document.querySelector('#artist')
let music = document.querySelector('#nomeMusic')
let setaNext = document.querySelector('#next')
let setaPrevious = document.querySelector('#previous')

//Variável que mantém o índice da música atual no array.
let indexMusicas = 0

//Função chamada para renderizar a música inicial (a música no índice 0).
renderizar(indexMusicas)


//Eventos

//Play: Ao clicar no botão de play, a função tocar() é chamada.
play.addEventListener('click',tocar)

//Pause: Ao clicar no botão de pause, a função pause() é chamada.
buttonPause.addEventListener('click',pause)

//timeupdate: Evento disparado sempre que o tempo da música é atualizado.
//atualizarBarra() é chamada para atualizar a barra de progresso.
musica.addEventListener('timeupdate', atualizarBarra)

//Ao clicar no botão de próximo, o índice da música é incrementado e a função renderizar() é chamada para carregar a próxima música.
setaNext.addEventListener('click', () => {
    indexMusicas ++ 
    renderizar(indexMusicas)
})

//Música Anterior: Ao clicar no botão de anterior, o índice da música é decrementado e a função renderizar() é chamada para carregar a música anterior.
setaPrevious.addEventListener('click', () =>{
    indexMusicas --
    renderizar(indexMusicas)

})



//Funções

//A música começa a tocar (musica.play()), o botão de pause é mostrado, e o botão de play é ocultado.
function tocar(){
    musica.play()
    buttonPause.style.display ='block'
    play.style.display ='none'
}

//A música é pausada (musica.pause()), o botão de pause é ocultado, e o botão de play é mostrado novamente.
function pause(){
    musica.pause()
    buttonPause.style.display='none'
    play.style.display ='block'
}

//A barra de progresso é atualizada com base no tempo atual da música (musica.currentTime) em relação à duração total (musica.duration).
//A função converter() é chamada para exibir o tempo de reprodução atual no formato minuto:segundo.
function atualizarBarra(){
    barra.style.width = Math.floor((musica.currentTime / musica.duration)* 100 )+ '%'
    tempo.textContent = converter(Math.floor(musica.currentTime))
    
}

//A função converte o tempo em segundos para o formato minuto:segundo. Se o número de segundos for menor que 10, ele adiciona um zero à frente.
function converter(segundos){
    let campoMinuto = Math.floor(segundos / 60)
    let campoSegundo = (segundos % 60)
    if(campoSegundo < 10){
        campoSegundo = '0' + campoSegundo
    }
    return campoMinuto + ':' + campoSegundo
}

//Carregar a música: O atributo src do elemento de áudio é atualizado para o caminho da música no índice index.
//Quando os dados estão carregados (loadeddata), o título da música, o nome do artista e a imagem de fundo são atualizados na interface.
//O tempo final da música é mostrado na interface após a duração da música ser carregada.
function renderizar(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata',() =>{
        music.textContent = musicas[index].titulo
        artista.textContent = musicas[index].artista
        img.style.backgroundImage = `url(${musicas[index].img})`
        tempoFinal.textContent = converter(Math.floor(musica.duration))

    })
}



























