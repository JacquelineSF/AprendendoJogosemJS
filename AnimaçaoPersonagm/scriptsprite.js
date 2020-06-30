function Sprite(img){
    //atributos 
    this.srcX = this.srcY = 0
    //tamanho do personagem, na imagem
    this.width = 400
    this.height = 400
    //para mover o personagem na tela
    this.posX = this.posY = 0
    this.img = img
    //metodos pra desenhar o personagem na tela

    this.draw = function(context){
        context.drawImage(this.img, this.srcX, this.srcY,this.width, this.height, this.posX, this.posY, this.width, this.height)
    }
    
}