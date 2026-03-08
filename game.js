const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

const dialogue = document.getElementById("dialogueBox")

let player = {
x:150,
y:150,
speed:3
}

const keys = {}

const sprite = new Image()
sprite.src = "sprites/player.png"

function update(){

if(keys["ArrowUp"]) player.y -= player.speed
if(keys["ArrowDown"]) player.y += player.speed
if(keys["ArrowLeft"]) player.x -= player.speed
if(keys["ArrowRight"]) player.x += player.speed

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.drawImage(sprite,player.x,player.y,32,32)

}

function gameLoop(){

update()
draw()
requestAnimationFrame(gameLoop)

}

document.addEventListener("keydown",e=>{

keys[e.key] = true

if(e.key==="a") dialogue.innerText="Line from A button"
if(e.key==="b") dialogue.innerText="Line from B button"
if(e.key==="x") dialogue.innerText="Line from X button"
if(e.key==="y") dialogue.innerText="Line from Y button"

})

document.addEventListener("keyup",e=>{
keys[e.key] = false
})

document.getElementById("btnA").onclick=()=>dialogue.innerText="Line from A button"
document.getElementById("btnB").onclick=()=>dialogue.innerText="Line from B button"
document.getElementById("btnX").onclick=()=>dialogue.innerText="Line from X button"
document.getElementById("btnY").onclick=()=>dialogue.innerText="Line from Y button"

document.getElementById("up").onclick=()=>player.y-=10
document.getElementById("down").onclick=()=>player.y+=10
document.getElementById("left").onclick=()=>player.x-=10
document.getElementById("right").onclick=()=>player.x+=10

sprite.onload=()=>{
gameLoop()
}
