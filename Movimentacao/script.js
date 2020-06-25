let canv = document.querySelector("canvas")
let contx = canv.getContext("2d")
//criou um objeto para as posições
const left = 65, up = 87, rigth = 68, down = 83
let mvleft = mvup = mvrigth = mvdown = false

let pos1 = {
    x: 10,
    y:10
}

function Move(){
    if(mvleft){
        if(pos1.x > 0){
        pos1.x--
    }}
    if(mvrigth){
        if(pos1.x < 550){
            pos1.x++
       } }
        
    if(mvup){
        if(pos1.y >0){
        pos1.y--
    }}
    if(mvdown){
        if(pos1.y < 350)
        pos1.y++
    }
}   
  
window.addEventListener("keydown", apertabotao,false)
window.addEventListener("keyup", soltandobotao,false)

function apertabotao(e){//para ver se funciona sempre faça um alert antes
    let key = e.keyCode

    //if(key === 65){alert("tudo ok") }   
         switch(key) {
        case left : mvleft = true
       break
        case up : mvup = true
       break
       case rigth : mvrigth = true
       break
       case down : mvdown = true
       break
  }

}

function soltandobotao(e){
    let key = e.keyCode
        switch(key) {
            case left : mvleft = false
            break
            case up : mvup = false
            break
            case rigth : mvrigth=  false
            break
            case down  : mvdown= false
            break

    }
}

function update(){
    Move()
   
}

function render(){

    contx.clearRect(0,0,canv.width,canv.height)
    contx.fillRect(pos1.x, pos1.y,50,50)
    
}

function loop(){
    window.requestAnimationFrame(loop, canv)
    update()
    render()
}
loop()