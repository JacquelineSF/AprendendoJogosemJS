window.onload = function(){
    let left = 65, up = 87, rigth = 68, down = 83
    let canv = document.querySelector("canvas")
    let contxt = canv.getContext("2d")
    let spriteSheet = new Image()
    spriteSheet.src = "imagem/imgsprite.png"
    let person = new Sprite(spriteSheet)
    let posX = 0
    let posY = 0
    let scene = new Image()
    scene.src = "imagem/scene.png"


    window.addEventListener('keydown',apertabotao,false)
    window.addEventListener('keyup',soltabotao,false)
    

//para n ter conflito entre as teclas, vc coloca a priemira como true e as outras como falso.
    function apertabotao(e){
        switch (e.keyCode){
            case left: person.movLeft = true
                        person.movUp = false
                        person.movRight = false
                        person.movDown = false
            break

            case up: person.movUp = true
                        person.movLeft = false
                        person.movRight = false
                        person.movDown = false
            break
            case rigth: person.movRight = true
                        person.movUp = false
                        person.movLeft = false
                        person.movDown = false
            break
            case down: person.movDown = true
                        person.movUp = false
                        person.movRight = false
                        person.movLeft = false
        }
    }
    function soltabotao(e){
        switch (e.keyCode){
            case left: person.movLeft = false
                    
            break

            case up: person.movUp = false
                   
            case rigth: person.movRight = false
                        
            break
            case down: person.movDown = false
                    
        }
    }



spriteSheet.onload = function(){
    Inicio()
}

function Inicio(){
    //se quiser mudar a posicao de inicio: person.posX = person.posY = 150
    loop()
}

    function update(){
        person.move()

    }
    function draw(){
        contxt.clearRect(0,0, canv.width,canv.height)
        contxt.drawImage(scene, 0,0,scene.width, scene.height,0,0 ,canv.width, canv.height)
        person.draw(contxt)

    }


    function loop(){
        window.requestAnimationFrame(loop, canv)
        update()
        draw()
    }

}