var canv = document.querySelector("canvas")
var ctx = canv.getContext("2d")
//agr criar as variaveis responsaveis pelo movimento, vc usa o código das teclas q serao usadas. O código é mostrado ao colocar o 'e.keyCode' como na funtion pressionebotao.
let LEFT = 65, UP = 87, RIGTH = 68, DOWN = 83
let SIZE = 50
//para a posicao do quadrado q vai ser movimentado
let posx = 50
let posy = 50
//para a cor quando for colidido
let objColor = "#00f"


let mvLeft = mvUp = mvRigth = mvDown = false


//criar function para mover o bloco de acordo com as variaveis acima.

function updateblock(){
    //se mvleft for true a posicao x diminui, etc
if(mvLeft){
    posx--
}
if(mvRigth){
    posx++
}
if(mvUp){
    posy--
}
if(mvDown){
    posy++
}
}

window.addEventListener('keydown', pressionebotao,false)
window.addEventListener('keyup',soltandobotao,false)



function pressionebotao(e){
   
 
  
    var key = e.keyCode
    switch(key){
        case UP:
            mvUp = true
            break
        case DOWN:
            mvDown = true
            break
        case LEFT:
            mvLeft = true
            break
        case RIGTH:
            mvRigth = true
            break

    }
}

function soltandobotao(e){
    var key = e.keyCode
    switch(key){
        case UP:
            mvUp = false
            break
        case DOWN:
            mvDown = false
            break
        case LEFT:
            mvLeft = false
            break
        case RIGTH:
            mvRigth = false
            break

    }
}

function update(){
    updateblock()
}

//para o desenho, o q vai interagir na tela
function draw(){
    ctx.clearRect(0,0,canv.width,canv.height)
    ctx.fillRect(posx,posy,SIZE,SIZE)

}
//vai ficar repetindo 60x por segundo
function loop(){
    window.requestAnimationFrame(loop, canv)
    update()
    draw()

}
//para chamar a funcao loop na primeira vez vc coloca ela fora das functions
loop()