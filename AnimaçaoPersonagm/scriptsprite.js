function Sprite (img){
    //atributos 
    this.movLeft = this.movUp = this.movRight = this.movDown = false
    this.srcX = this.srcY = 0
    //tamanho do personagem, na imagem
    this.width = 49
    this.height = 73
    //para mover o personagem na tela
    this.posX = this.posY = 0
    this.img = img
    this.speed = 1
    this.contadorAnima = 0   
    //metodos pra desenhar o personagem na tela

    this.draw = function(contxt){
        contxt.drawImage(this.img, this.srcX, this.srcY,this.width, this.height, this.posX, this.posY, this.width, this.height)
        this.Animation()
    }
    


    this.move = function(){
        
        if(this.movRight){
           
                this.posX+= this.speed
                this.srcY = this.height * 3
                
            }else 
            if(this.movLeft){
        
            this.posX -= this.speed
            this.srcY = this.height * 2
        }else
            if(this.movUp){
  
                this.posY-= this.speed
                this.srcY = this.height * 1
            
         }else
        if(this.movDown){
        
            this.posY+= this.speed
            this.srcY = this.height * 0
        
    }
    }

    this.Animation = function(){
        if(this.movLeft || this.movUp || this.movRight || this.movDown){
            this.contadorAnima++
            if(this.contadorAnima >= 17) {
                this.contadorAnima = 0
            }
            this.srcX = Math.floor(this.contadorAnima / 5) * this.width
        }
    }
    }

//esse /5 é a velocidade de animacao, para aumentar a velocidade é só diminuir o valor