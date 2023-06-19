var canvas, ctx, player, width, height, came, button = 0
var game = {
    height: 400,
    width: 800
}

function getImgSize(image) {
    return {
    width: image.naturalWidth,
    height: image.naturalHeight
    }
  }
var width = function(numero){
    // let calc = -numero + 100
     //let calc2 = game.width * (numero /100)
     //return calc2
     return numero *3
     
 }
 var height =  function(numero){
    // let calc = -numero + 100
     //let calc2 = game.height * (numero /100)
     //return calc2
     return numero *3
     
 }


var sprP = {
    run: [],
    runwh: [],
    jump: [],
    jumpwh: [],
    health: []
}
var dog = {
    run: [],
    runwh: [],
}


for (let i = 0; i < 6; i++){
    dog.run[i] = new Image
    dog.run[i].src = `spr/run/dog${i}.png`
    dog.runwh[i] = getImgSize(dog.run[i])
}

sprP.health = new Image; sprP.health.src = "spr/assets/healthbar.png"
sprP.health.wh = getImgSize(sprP.health)
for (let i = 0; i < 4; i++){
    sprP.run[i] = new Image
    sprP.run[i].src = `spr/run/run${i}.png`
    sprP.runwh[i] = getImgSize(sprP.run[i])
}
for (let i = 0; i < 7; i++){
    sprP.jump[i] = new Image
    sprP.jump[i].src = `spr/jump/jump${i}.png`
    sprP.jumpwh[i] = getImgSize(sprP.jump[i])
}

var tile01 = new Image
tile01.src = "spr/tiler/tile florest3.png"
var tile01Wh = getImgSize(tile01)

var tile02 = new Image
tile02.src = "spr/tiler/tile florest4.png"
var tile02Wh = getImgSize(tile02)

var imgduck, loadingImg
imgduck= new Image, loadingImg = new Image
imgduck.src = "spr/assets/duckstart.png", loadingImg.src = "spr/assets/loading.png"

var danoc = 0
function dano(dano, inimigo, dir, condicao){
                    
    let i = 0
    player.velY = -10
    let dirD = player.dirD 
    let dirE = player.dirE

    let condi = condicao

    if(dano > 0){

        if(condi == 1 && danoc ==0){
            player.vida -=5
            danoc = 1
            
        }
        else if(condicao == 0){
            console.log("naofoi")
            inimigo.vida -=10
        }


        
        function myLoop() {         //  create a loop function
            setTimeout(function() {   //  call a 3s setTimeout when the loop is called
              
//  your code here   

                danoc = 0
              console.log("oi")
    
            }, 3000)
          }
          
          myLoop()
        
        
    }
    else{
        inimigo.vida -= dano
    }
    function myLoop() {         //  create a loop function
        setTimeout(function() {   //  call a 3s setTimeout when the loop is called
          player.x +=  -   (Math.sign(((dir * colisionDir(this)) + (dir* colisionEsq(this)))))

          player.jump = 1
//  your code here
          i++                //  increment the counter
          if (i < 30) { 
                    //  if the counter < 10, call the loop function
            myLoop();             //  ..  again which will trigger another 
          }

        }, 10)
      }
      
      myLoop()
    this.velY -= 10
}

function grvIni(obj1, grv){
    for (let i  = 0; i  < obj.length; i++) {
        
        if (obj1.y  + obj1.altura  + obj1.velY + 2> obj[i].y && obj1.y < obj[i].y + obj[i].altura && obj1.x + obj1.largura > obj[i].x  && obj1.x < obj[i].x + obj[i].largura){
           if(obj1.velY > 0 && obj1.y + obj1.altura -1< obj[i].y ){
            obj1.y =obj[i].y - obj1.altura -2
            obj1.velY = 0
           }
        }
        }       
    obj1.velY += grv
    obj1.y += obj1.velY
}

function grv(obj1, grv){
    for (let i  = 0; i  < obj.length; i++) {
        
        if (obj1.y  + obj1.altura  + obj1.velY + 2> obj[i].y && obj1.y < obj[i].y + obj[i].altura && obj1.x + obj1.largura > obj[i].x  && obj1.x < obj[i].x + obj[i].largura){
           if(obj1.velY > 0 && obj1.y + obj1.altura -1< obj[i].y ){
            obj1.y =obj[i].y - obj1.altura -2
            obj1.velY = 0
            obj1.jump = 0
            
            
            
           }
           //else{
            //obj1.velY = 0
            //obj1.y =obj[i].y + obj[i].altura    
          // }
           
        }
        
        }
        for (let i  = 0; i  < inimigos.length; i++) {
        
            if (obj1.y  + obj1.altura  + obj1.velY + 2> inimigos[i].y && obj1.y < inimigos[i].y + inimigos[i].altura && obj1.x + obj1.largura > inimigos[i].x  && obj1.x < inimigos[i].x + inimigos[i].largura){
               if(obj1.velY > 0 && obj1.y + obj1.altura -1< inimigos[i].y ){
                obj1.y =inimigos[i].y - obj1.altura -2
                obj1.velY = 0
                obj1.jump = 0
                dano(10, inimigos[i], obj1.direcao, 0)
                
    
                
               }
               //else{
                //obj1.velY = 0
                //obj1.y =obj[i].y + obj[i].altura    
              // }
               
            }
            
            }
        
           
    obj1.velY += grv
    obj1.y += obj1.velY
}




function colisionDir(obj1){
    for (let ind  = 0; ind  < obj.length; ind++) {
        if ( obj1.y + obj1.altura > obj[ind].y && obj1.y <  obj[ind].y + obj[ind].altura  && obj1.x + obj1.largura + obj1.vel > obj[ind].x && obj1.x < obj[ind].x + obj[ind].largura && obj[ind].altura > 3){
            obj1.x = obj[ind].x - obj1.largura - 0.5
            
            return 0
        }
    }
    for (let ind  = 0; ind  < inimigos.length; ind++) {
        if ( obj1.y + obj1.altura > inimigos[ind].y && obj1.y <  inimigos[ind].y + inimigos[ind].altura  && obj1.x + obj1.largura + obj1.vel > inimigos[ind].x && obj1.x < inimigos[ind].x + inimigos[ind].largura && inimigos[ind].altura > 3){
            obj1.x = inimigos[ind].x - obj1.largura - 0.5
            dano(3, inimigos[ind], 1, 1)
            return 0
        }
        
    }
    return 1
}
function colisionEsq(obj1){
for (let ind  = 0; ind  < obj.length; ind++) {
    if ( obj1.y + obj1.altura > obj[ind].y && obj1.y <  obj[ind].y + obj[ind].altura  && obj1.x - obj1.vel < obj[ind].x + obj[ind].largura && obj1.x + obj1.largura > obj[ind].x && obj[ind].altura > 3){
        //obj1.x = obj[ind].x + obj[ind].largura + 0.5
        return 0
    }

}
for (let ind  = 0; ind  < inimigos.length; ind++) {
    if ( obj1.y + obj1.altura > inimigos[ind].y && obj1.y <  inimigos[ind].y + inimigos[ind].altura  && obj1.x - obj1.vel < inimigos[ind].x + inimigos[ind].largura && obj1.x + obj1.largura > inimigos[ind].x && inimigos[ind].altura > 3){
        //obj1.x = obj[ind].x + obj[ind].largura + 0.5
    dano(3, inimigos[ind], -1, 1)
        return 0
    }

}
return 1
}

function colisionDirIni(obj1, i){
    for (let ind  = 0; ind  < objI.length; ind++) {
        if ( obj1.y + obj1.altura > objI[ind].y && obj1.y <  objI[ind].y + objI[ind].altura  && obj1.x + obj1.largura + obj1.vel > objI[ind].x && obj1.x < objI[ind].x + objI[ind].largura && objI[ind].altura > 3){
            obj1.x = objI[ind].x - obj1.largura - 0.5
            
            obj1.dir = obj1.dir *-1
            
        }
    }
    for (let ind  = 0; ind  < inimigos.length; ind++) {
        if (ind != i && obj1.y + obj1.altura > inimigos[ind].y && obj1.y <  inimigos[ind].y + inimigos[ind].altura  && obj1.x + obj1.largura + obj1.vel > inimigos[ind].x && obj1.x < inimigos[ind].x + inimigos[ind].largura && inimigos[ind].altura > 3){
            obj1.x = inimigos[ind].x - obj1.largura - 0.5
            
            obj1.dir = obj1.dir *-1
            
        }
    }
    
}
function colisionEsqIni(obj1, i){
for (let ind  = 0; ind  < objI.length; ind++) {
    if ( obj1.y + obj1.altura > objI[ind].y && obj1.y <  objI[ind].y + objI[ind].altura  && obj1.x - obj1.vel < objI[ind].x + objI[ind].largura && obj1.x + obj1.largura > objI[ind].x && objI[ind].altura > 3){
        obj1.x = objI[ind].x + objI[ind].largura + 0.5
        obj1.dir = obj1.dir *-1
    }

}
for (let ind  = 0; ind  < inimigos.length; ind++) {
    if (ind != i && obj1.y + obj1.altura > inimigos[ind].y && obj1.y <  inimigos[ind].y + inimigos[ind].altura  && obj1.x - obj1.vel < inimigos[ind].x + inimigos[ind].largura && obj1.x + obj1.largura > objI[ind].x && inimigos[ind].altura > 3){
        obj1.x = inimigos[ind].x + inimigos[ind].largura + 0.5
        obj1.dir = obj1.dir *-1
    }

}


}


function main(){
    canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d')
    document.body.appendChild(canvas)
    canvas.height = game.height*2
    canvas.width = game.width*2
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;



          window.devicePixelRatio=1; //Blury Text
    window.devicePixelRatio=2;      //Clear Text
    //(CSS pixels).
          //Display Size
          
canvas.style.width = game.width  + "px";
canvas.style.height = game.height + "px";

var scale = window.devicePixelRatio; 
    


//CSS pixels for coordinate systems
ctx.scale(scale, scale);



    document.onkeydown = andDown1
    function andDown1(e){
        button = true
       player.down(e.keyCode)

    }
    document.onkeyup = andUp
    function andUp(e){
        button = false
       player.up(e.keyCode)

    }
    document.onkeypress = (e)=>{
        player.pres(e.keyCode)
    }

        

    atualiza()
}

var inimigos = [
    {
        largura: 30,
            altura: 30,
            x: 617,
            y: 244.7 - 30,
            dir: 1,
            vida: 20,
            vel: 3,
            desenha(){
            ctx.fillStyle = 'red'
            ctx.fillRect(this.x, this.y, this.largura, this.altura)


    }},
    {
        largura: 30,
            altura: 30,
            x: 680,
            y: 244.7 - 30,
            dir: 1,
            vida: 20,
            vel: 3,
            velY: 0,
            desenha(){
                grvIni(this, 0.6)
            ctx.fillStyle = 'black'
            ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }}
]

class Inimigo {
    constructor(x, y, vida, inimigo) {
      this.largura= inimigo.runwh[0].width*2
      this.altura= inimigo.runwh[0].height*2
      this.x = x
      this.y = y
      this.vida = vida
      this.dir= 1
      this.vel= 4
      this.velY = 0
      this.sprN = 0
      this.sprite = dog.run[0]
      this.desenha = ()=>{
          grvIni(this, 0.6)
        //ctx.fillStyle = 'black'
        //ctx.fillRect(this.x, this.y, this.largura, this.altura)
        ctx.drawImage(this.sprite, this.x, this.y, this.largura, this.altura)
        this.sprM()
    }
    this.sprM = ()=>{
          this.sprN += 1
          if(this.sprN < 3){
            this.sprite = dog.run[0]
          }
          if(this.sprN > 3){
            this.sprite = dog.run[1]
          }
          if(this.sprN > 6){
            this.sprite = dog.run[2]
          }
          if(this.sprN > 9){
            this.sprite = dog.run[3]
          }
          if(this.sprN > 12){
            this.sprite = dog.run[4]
          }
          if(this.sprN > 15){
            this.sprite = dog.run[5]
          }
          if(this.sprN > 18){
              this.sprN = 6}
    }
}}

function criarInimigo(x, y, vida, inimigo) {
    const novoInimigo = new Inimigo(x, y, vida, inimigo);
    inimigos.push(novoInimigo);
  }
  

var inimigoInt = {
    desenha(){
        for( i=0; i < inimigos.length; i++){
            inimigos[i].desenha()
        }
        for( i=0; i < objI.length; i++){
            objI[i].desenha()
        }
    },
    atualiza(){
        for( i=0; i < inimigos.length; i++){
            inimigos[i].x += inimigos[i].dir * inimigos[i].vel
            colisionEsqIni(inimigos[i], i)
            colisionDirIni(inimigos[i], i)
            if(inimigos[i].vida <= 0){
                inimigos.splice(i , i+ 1 )
            }
            
        }
    }
}
var objI = [
    {
        largura: 20,
            altura: 20,
            x: 597,
            y: 244.7 - 20,
            dir: 1,
            vel: 1,
            desenha(){
            ctx.fillStyle = 'red'
            ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }},
    {
        largura: 20,
            altura: 20,
            x: 1297,
            y: 244.7 - 20,
            dir: 1,
            vel: 1,
            desenha(){
            ctx.fillStyle = 'red'
            ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }}
]

var obj = [

    {
        larguraS: tile01Wh.width *2,
        alturaS: tile01Wh.height *2,
        largura: 0,
        altura: 0,
        x: 0,
        y: 0,
        sprite: tile01,
        desenha(){
            
            ctx.fillStyle = 'red'
            ctx.drawImage(this.sprite, this.x, this.y, this.larguraS, this.alturaS)
            ctx.fillRect(this.x, this.y, this.largura, this.altura)
    } 
    },
    {
        larguraS: tile02Wh.width *2,
        alturaS: tile02Wh.height *2,
        largura: 0,
        altura: 0,
        x: tile01Wh.width *2,
        y: 0,
        sprite: tile02,
        desenha(){
            ctx.fillStyle = 'red'
            ctx.drawImage(this.sprite, this.x, this.y, this.larguraS, this.alturaS)
            ctx.fillRect(this.x, this.y, this.largura, this.altura)
    } 
    },

    {
        largura: 4000,
            altura: 40,
            x: 0,
            y: 332,
            desenha: function(){
            ctx.fillStyle = 'red'
            //ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }},
    {
        largura: 700,
            altura: 1,
            x: 615,
            y: 244.7,
            desenha: function(){
            ctx.fillStyle = 'red'
            ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }},
    {
        largura: 5,
            altura: game.height,
            x: -5,
            y: 0,
            desenha: function(){
            ctx.fillStyle = 'red'
            ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }},
    

]




var textStartO = 1
var textStartS = 1
var trocarTStart = 0
var telas = {
    
    inicio:{
        
        criar(){
             trocarTStart = 0
            setTimeout(function() {   //  call a 3s setTimeout when the loop is called
                 trocarTStart = 1
                //  your code here   
                
                                
                    
                            }, 2000)
        },
        atualiza(){
 
            if(textStartO > 0.1 && textStartS == 1 ){
                textStartO -=0.05

            }
            else if (textStartO < 0.1  && textStartS == 1 ){
                textStartS = -1

            }
            else if(textStartO < 1 && textStartS == -1 ){
                textStartO +=0.05
            }
            else{
                textStartS = 1
            }
            
            if(button == true && trocarTStart == 1){
                trocarTela(telas.game)
            }
            console.log(button)
            
        },
        desenha(){
            ctx.drawImage(imgduck, 0, 0, width(267), height(134))
            ctx.save()
            ctx.globalAlpha = textStartO
            ctx.font = '30px thaleahfat'
ctx.fillStyle = 'white';
ctx.fillText('Press to start', width(102.3), height(120));
            ctx.restore()

            
        }
    },
    loading: {
        fraseA: 1,
        opacity: 2,
        criar(){
            this.fraseA = this.faseA = Math.floor(Math.random() * 4) + 1;
            textStartO = 2
            window.onload = ()=>{
                console.log("já carregou")
                setTimeout(function() {   //  call a 3s setTimeout when the loop is called
                    textStartO = 1
                //  your code here   

                console.log("opa: ", this.opacity)
                                
                    
                            }, 7000)
        }

            
        },
        atualiza(){
            if (textStartO < 1.5 && textStartO > 0.02){
                textStartO -=0.02
                console.log(textStartO)
            }
            else if(textStartO < 0.02){
                trocarTela(telas.game)
            }
            console.log(textStartO)
        },
        desenha(){
            ctx.save()
            ctx.globalAlpha = textStartO
            ctx.drawImage(loadingImg, 0, 0, width(267), height(134))

            ctx.font = '22px thaleahfat'
ctx.fillStyle = 'white';

            if(this.fraseA == 1){
                ctx.fillText('A escuridao se adensa, e O Pato se torna o pesadelo', width(13), height(104));
                ctx.fillText('emplumado que assombra as ordas de inimigos em Feathered Fury', width(13), height(110));
            }
            else if(this.fraseA == 2){
                ctx.fillText('Qual e o programa de TV favorito do pato?', width(13), height(104));
                ctx.fillText('Quack Mirror!', width(13), height(110));
            
            }
            else if(this.fraseA == 3){
                ctx.fillText('Por que o pato nunca se juntou ao exército durante a Segunda Guerra Mundial?', width(11), height(104));
                ctx.fillText('Porque ele já era um "pato neutro"! Ele preferiu evitar os lados', width(11), height(110));
                ctx.fillText('e ficar na sua tranquilidade emplumada.', width(11), height(116));
            
            }
            else if(this.fraseA == 4){
                ctx.fillText('O que o pato fazia na rádio? ', width(13), height(54));
                ctx.fillText('Ele transmitia mensagens codificadas para os militantes da resistência. ', width(13), height(70));
                ctx.fillText('Mas ele não sabia que estava sendo monitorado pelos agentes da ditadura. ', width(13), height(76));
                ctx.fillText('Eles decifraram o código e descobriram os planos dos rebeldes. ', width(13), height(82));
                ctx.fillText('Eles invadiram a rádio e capturaram o pato. Eles o levaram para um centro  ', width(13), height(88));
                ctx.fillText('de tortura e o submeteram a todo  tipo de crueldade. Eles arrancaram suas ', width(13), height(94));
                ctx.fillText('penas, quebraram seu bico, cortaram suas asas. Eles o eletrocutaram,  ', width(13), height(100));
                ctx.fillText('afogaram, queimaram. Eles o fizeram implorar por misericórdia.  ', width(13), height(106));
                ctx.fillText('Eles o fizeram delatar seus companheiros. Eles o fizeram perder a sua', width(13), height(112));
                ctx.fillText('dignidade. E depois o mataram.  ', width(13), height(118));
            
            
            }


            ctx.restore()
            
        }
    },

    menu: {},
    game: {
        criar(){
            criarInimigo(0, 0, 20, dog)
            came = {
                x: 0,
                y: 0,
                largura: game.width,
                altura: game.height,
                atualiza(){
                    if(this.x + this.largura * 0.40 > player.x && this.x > 0){
                        this.x -= player.vel
                    }
                    if(this.x + this.largura * 0.60 < player.x + player.largura){
                        this.x += player.vel
                    }
                    if(player.jump == 0){
                        if (came.y > player.y + player.altura/2 - came.altura/2 + this.altura * 0.30){
                           if(came.y  < player.y - came.altura/2 -  this.altura * 0.30){
                            came.y -= 3 * (came.y  - (player.y - came.altura/2 -  this.largura * 0.30 + 10))/110
                           }
                           else{
                            came.y = player.y + player.altura/2 - came.altura/2 -  this.altura * 0.30
                           }
                            
                            
                        }}
                        if(came.y < player.y + player.altura/2 - came.altura/2 - this.altura * 0.30 ){
                        
                            came.y = player.y + player.altura/2 - came.altura/2 - this.altura * 0.30
                               
                    }
                }
            }
            player = {
                jump: 0,
                x: width(250),
                y: 290,
                sprInd: 0,
                trocarInd(ind){
                    
                    if(this.jump == 1){
                        this.sprInd = ind
                        this.altura = sprP.jumpwh[ind].height *2
                        this.largura = sprP.jumpwh[ind].width *2
                        
                    }
                    else{
                        this.sprInd = ind
                    this.altura = sprP.runwh[this.sprInd].height *2
                    
                    this.largura = sprP.runwh[this.sprInd].width *2
                    
                    
                    }
                    
                    
                },
                sprite: sprP.run[0],
                sprwh: sprP.runwh[0],
                largura:  sprP.runwh[0].width *2,
                altura: sprP.runwh[0].height *2,
                right: false,
                left: false,
                dirE: 0,
                dirD: 0,
                vel : 3,
                vida: 20,
                spr: 0,
                velY: 0,
                sprU: 1,
                sprN: 0,
                direcao: 1,
                dano: 0,
                clone: 0,
                dashN:3,
                dashNe: 0,
                velDash: -1,
                atualiza(){
                    grv(this, 0.6)
                    
                    
                    
                    if(this.velY > 2 || this.velY < -2){
                        this.sprU = (Math.sign(this.dirD + this.dirE) != 0) ?Math.sign(this.dirD + this.dirE) :this.sprU
                    }
                    
                    this.direcao = (Math.sign(this.dirD + this.dirE) != 0) ?Math.sign(this.dirD + this.dirE) :this.sprU
                    
                    
                    
                    if(this.dashN ==1){
                        this.dashN = 2
                        
                    }
                    else 
                        
                        this.x += this.velDash * this.sprU
                        setTimeout(function() {   //  call a 3s setTimeout when the loop is called
                            player.dashN = 0 
                            console.log("parou:", this.dashN)
                                        }, 400)
                        
                    }
                    else{
                        console.log("parou")
                    }
                    
                    this.x += (Math.sign(((this.dirD * colisionDir(this)) + (this.dirE * colisionEsq(this))))* this.vel)
                },
            
                desenha(){
                    this.sprM()
                    let health = (146 * this.vida)/20
                    
                    ctx.save()
                    ctx.scale(this.direcao, 1)
                    
                    ctx.fillStyle = 'red' // Nova cor desejada
                    
                    ctx.drawImage(this.sprite, this.x * this.direcao, this.y, this.largura * this.direcao, this.altura)
                    ctx.restore()

                    ctx.globalCompositeOperation = 'source-over';
                    ctx.save()
                    ctx.globalCompositeOperation = 'source-over';
                    ctx.fillStyle = "rgb(100, 100, 100)"
                    ctx.fillRect(came.x + width(29.7), came.y + height(8.4), sprP.health.wh.width * 4 - width(17), sprP.health.wh.height * 4 - height(10 ))
                    ctx.fillStyle = "rgb(175, 37, 67)"
                    ctx.fillRect(came.x + width(29.7), came.y + height(8.4), health, sprP.health.wh.height * 4 - height(10 ))
                    ctx.drawImage(sprP.health, came.x + width(15), came.y + height(3), sprP.health.wh.width * 4, sprP.health.wh.height * 4)

                    
                    ctx.restore()
                    ctx.globalCompositeOperation = 'source-over';
                    ctx.save()
                    ctx.scale(this.direcao, 1)

                    
          
                   // ctx.globalCompositeOperation = 'source-in';
                    ctx.fillStyle = 'red' // Nova cor desejada
                    ctx.drawImage(this.sprite, this.x * this.direcao -10, this.y, this.largura * this.direcao, this.altura)

                   
                    // Restaurar configurações do contexto
                    
                    ctx.restore()
                    ctx.globalCompositeOperation = 'source-over';

                },
                dash(){
                    if(this.dashNe == 0){
                    console.log("dash")
                    this.dashN = 1
                    this.velDash =30
                    this.dashNe = 1
                    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
                        player.dashNe = 0
                        console.log(player.dashNe, "FOi ")
                    }, 3000)
                    }
                    
                },
                
                pres(e){
                   
                },


                down(e){
                    
                       console.log(e)
                    if (e == 68){
                        this.dirD = (((this.dirE) * -1) + 1)
                        this.right = 1
                        
                        
                    }
                     
                    if (e == 65 ){
                        this.dirE = ((this.dirD) * -1) -1
                        this.left = -1
                    }
                    if (e == 87 || e == 32){
                       
                        
                        if (this.jump < 1){
                           
                            
                            setTimeout(() => {
                                this.velY = -12
                                this.spr = 0
                            this.jump =1
                                
                            }, 10);
                            

                            }
                            

                            

                    }      
                       
                },
                up(e){
                    if (e == 68){
                        this.dirD = 0
                        this.right = 0
                    }
                    if (e == 65){
                        this.dirE = 0
                        this.left = 0
                }
                if (e == 16){
                        this.dash()
                        
                    }
                

                },
                sprM(){
                    if(this.jump == 1){
                        this.spr++
                        this.sprite = sprP.jump[0]
                        if(this.sprN != 2){
                        
                            
                        this.sprN = 2
                        this.spr = 0
                        this.trocarInd(0)
                        }
                        if(this.spr > 1 ){
                            this.sprite = sprP.jump[1]
                            this.trocarInd(1)
                        }
                         if(this.spr > 6){
                            this.sprite = sprP.jump[2]
                            this.trocarInd(2)
                        }
                        if(this.spr > 9){
                            this.sprite = sprP.jump[3]
                            this.trocarInd(3)
                            
                            
                        }
                        if(this.spr > 12 ){
                            this.sprite = sprP.jump[4]
                            this.trocarInd(4)
                        }
                         if(this.spr > 15){
                            this.sprite = sprP.jump[5]
                            this.trocarInd(5)
                        }
                        if(this.spr > 18){
                            this.sprite = sprP.jump[6]
                            this.trocarInd(6)
                            
                            
                        }
                        if(this.spr > 21 ){
                            this.sprite = sprP.jump[5]
                            this.trocarInd(5)
                        }
                         if(this.spr > 24){
                            this.sprite = sprP.jump[4]
                            this.trocarInd(4)
                        }
                        if(this.spr > 27){
                            this.sprite = sprP.jump[3]
                            this.trocarInd(3)
                            
                            
                        }
                        if(this.spr > 30){
                            this.sprite = sprP.jump[2]
                            this.trocarInd(2)
                        }
                        if(this.spr > 38 ){
                            this.sprite = sprP.jump[1]
                            this.trocarInd(1)
                        }
                         
                        if(this.spr > 42){
                            this.sprite = sprP.run[0]
                            this.trocarInd(0)
                            this.altura = sprP.runwh[this.sprInd].height *2
                            this.largura = sprP.runwh[this.sprInd].width *2

                            
                            
                        }

                    }

                    else if((this.dirD + this.dirE) > 0){
                        this.spr++
                        
                        this.sprite = sprP.run[0]
                        
                        if ( this.sprN !=1){
                    
                            this.sprite = sprP.run[0]
                            this.sprU = 1
                            this.sprN = 1
                            this.spr = 0
                            this.trocarInd(0)
                        }
    
                            if(this.spr > 6 ){
                                this.sprite = sprP.run[1]
                                this.trocarInd(1)
                            }
                             if(this.spr > 12){
                                this.sprite = sprP.run[2]
                                this.trocarInd(2)
                            }
                            if(this.spr > 18){
                                this.sprite = sprP.run[3]
                                this.trocarInd(3)
                                
                                
                            }
                            if(this.spr > 24){
                                this.trocarInd(0)
                                this.spr = 0
                                
                            }
                    }
                    else if((this.dirD + this.dirE) < 0){
                        this.spr++
                        
                        this.sprite = sprP.run[0]
                        
                        if ( this.sprN !=-1){
                    
                            
                            this.sprU = -1
                            this.sprN = -1
                            this.spr = 0
                            
                        }
                        if(this.spr > 6){
                            this.sprite = sprP.run[1]
                            this.trocarInd(1)
                        }
                         if(this.spr > 12){
                            this.sprite = sprP.run[2]
                            this.trocarInd(2)
                        }
                        if(this.spr > 18){
                            this.sprite = sprP.run[3]
                            this.trocarInd(3)
                            
                            
                        }
                        if(this.spr > 24){
                            this.trocarInd(0)
                            this.spr = 0
                            
                        }
                        
                    
                    }
                    else if(this.jump == 0 & (this.dirD + this.dirE) == 0){
                        if ( this.sprN !=3){
                            this.trocarInd(0)
                        
                            this.sprN = 3
                            this.spr = 0
                            this.sprite = sprP.run[0]
                        }
                        
    
    
                        
                    }
                }
        }
        },
        atualiza(){
            inimigoInt.atualiza()
            player.atualiza()
            came.atualiza()
            if(player.vida == 0 || player.vida <0){
                trocarTela(telas.inicio)
            }
            
        },
        desenha(){
            ctx.save()
            ctx.translate(-came.x, -came.y)
            for( i=0; i < obj.length; i++){
                
                obj[i].desenha()
            }
            inimigoInt.desenha()
            player.desenha()
            
            ctx.restore()
        }
    }
}, telaAtiva
function trocarTela(tela){
    telaAtiva = tela
    tela.criar()
}
trocarTela(telas.game)




function desenha(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
telaAtiva.desenha()

}
function atualiza(){
requestAnimationFrame(atualiza)
/* setTimeout(() => {
    atualiza()
}, 100); */

telaAtiva.atualiza()
desenha()
}

tile02.addEventListener('load', ()=>{
    main()
})