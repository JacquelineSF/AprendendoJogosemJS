window.onload = function(){
    let left = 65, up = 87, rigth = 68, down = 83
    let canv = document.querySelector("canvas")
    let contxt = canv.getContext("2d")
    let spriteSheet = new Image()
    spriteSheet.src = "imagem/img.png"
    let person = new Sprite(spriteSheet)



spriteSheet.onload = function(){
    Inicio()
}

function Inicio(){
    loop()
}

    function update(){


    }
    function draw(){
        person.draw(contxt)

    }


    function loop(){
        window.requestAnimationFrame(loop, canv)
        update()
        draw()
    }

}