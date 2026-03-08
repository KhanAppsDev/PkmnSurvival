const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

const dialogue = document.getElementById("dialogueBox")

let player = {
x:150,
y:150,
speed:2,
dir:0,
frame:0
}

const spriteSheet = new Image()
spriteSheet.src = "https://www.spriters-resource.com/media/assets/8/8324.png"

const FRAME_SIZE = 32

const frames = {
down:[0,1,2],
left:[3,4,5],
right:[6,7,8],
up:[9,10,11]
}

let direction="down"

function update(){

if(moveX !== 0 || moveY !== 0){

player.x += moveX * player.speed
player.y += moveY * player.speed

player.frame += 0.2
if(player.frame >= 3) player.frame = 0

}

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

let frameIndex = Math.floor(player.frame)
let spriteIndex = frames[direction][frameIndex]

let sx = spriteIndex * FRAME_SIZE
let sy = 0

ctx.drawImage(
spriteSheet,
sx, sy,
FRAME_SIZE, FRAME_SIZE,
player.x, player.y,
FRAME_SIZE, FRAME_SIZE
)

}

function gameLoop(){

update()
draw()
requestAnimationFrame(gameLoop)

}

spriteSheet.onload = () => {
gameLoop()
}

let moveX = 0
let moveY = 0

const base = document.getElementById("joystickBase")
const stick = document.getElementById("joystickStick")

let dragging=false

base.addEventListener("pointerdown",()=>{
dragging=true
})

document.addEventListener("pointerup",()=>{
dragging=false
stick.style.left="35px"
stick.style.top="35px"
moveX=0
moveY=0
})

document.addEventListener("pointermove",(e)=>{

if(!dragging) return

const rect = base.getBoundingClientRect()

let x = e.clientX - rect.left - 60
let y = e.clientY - rect.top - 60

let dist = Math.sqrt(x*x+y*y)
let max = 40

if(dist>max){
x = x/dist*max
y = y/dist*max
}

stick.style.left = (x+35)+"px"
stick.style.top = (y+35)+"px"

moveX = x/max
moveY = y/max

if(Math.abs(moveX) > Math.abs(moveY)){
direction = moveX > 0 ? "right" : "left"
}else{
direction = moveY > 0 ? "down" : "up"
}

})

document.getElementById("btnA").onclick=()=>dialogue.innerText="A pressed"
document.getElementById("btnB").onclick=()=>dialogue.innerText="B pressed"
document.getElementById("btnX").onclick=()=>dialogue.innerText="X pressed"
document.getElementById("btnY").onclick=()=>dialogue.innerText="Y pressed"
document.getElementById("btnStart").onclick=()=>dialogue.innerText="Start pressed"
document.getElementById("btnSelect").onclick=()=>dialogue.innerText="Select pressed"