
let left =65  , up = 87, right= 68, down= 83, pgup = 81, pgdown = 69
let mvleft = mvup = mvright = mvdown = Zoomin = Zoomout = false

let canv = document.querySelector("canvas")
let context = canv.getContext("2d")
let srcX = 0
let srcY =0
let SizeZoom = 400
let speed = 2
let map = new Image()
map.src = "imagem/imgmapa.png"
map.onload = loop()


window.addEventListener("keydown", apertatecla,false)
window.addEventListener("keyup", soltatecla,false)

function apertatecla(e){
   
  let key = e.keyCode
    switch (key){
        case left: mvleft = true
        break
        case up : mvup = true
        break
        case right : mvright = true
        break
        case down : mvdown  = true
        break

        case pgup: Zoomin= true
        break

        case pgdown : Zoomout = true
        break
    }

}
function soltatecla(e){
    let key = e.keyCode
    switch (key){
        case left: mvleft = false
        break
        case up : mvup = false
        break
        case right : mvright = false
        break
        case down : mvdown  = false
        break
        case pgup: Zoomin= false
        break

        case pgdown : Zoomout = false
        break
    }
    } 



function render(){
    context.clearRect(0,0, canv.width,canv.height) // define coordenadas de limpeza, do ponto 0 (inicial) ao tamanho do canvas.
    context.drawImage(map,srcX,srcY,SizeZoom,SizeZoom,0,0,canv.width,canv.height)
}

function atualizacao(){ //verifica o que a nas variaveis
    if(mvleft){
        if(srcX>1){
            srcX -= speed
        }
    }
 
    if(mvup){
        srcY -= speed
    }
    if(mvright){
        srcX += speed
    }
    if(mvdown){
        srcY += speed
    }
    if(Zoomin){
        SizeZoom -= speed
    }
    if(Zoomout){
      SizeZoom += speed
}
}

function loop(){    //chama alguma funcao +/- 60x por segundo
requestAnimationFrame(loop,canv)
atualizacao()
render()

}

