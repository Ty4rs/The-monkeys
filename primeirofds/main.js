var telas, player, obj, canvas, ctx

function main() {
    canvas = document.createElement("canvas")
    ctx = canvas.getContext('2d')
    document.body.appendChild(canvas)
    atualiza()
    canvas.width = window.innerWidth
canvas.height = canvas.width * 0.5

function width(t){
    width = (canvas.width * t)/100
    return width
}
console.log(width(10))
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = canvas.width * 0.5
  
})
}




// Agora você pode usar o objeto 'ctx' para desenhar no canvas


var n1 = 30

function desenha(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(50, n1, 30, 30)
    
    
}
function atualiza(){
        window.requestAnimationFrame(atualiza)
        desenha()
        console.log("iii")
}
main()