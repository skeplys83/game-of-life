// @ts-check
import { grid,gridSize,oldField,pixelSize,setSliderValue,setUpdateInterval,updateInterval } from "../state";
import { canvas,slider,pause,step,reset } from "../dom";
import { drawGrid, updateGrid } from "../functions/coreFunctions";

let isDragging = false

canvas.addEventListener('mousedown', (e) => {
    isDragging = true

    let bounds = canvas.getBoundingClientRect()

    let x = Math.floor((e.clientX - bounds.left) / (bounds.width / gridSize))
    let y = Math.floor((e.clientY - bounds.top) / (bounds.height / gridSize))
    grid[x][y] = grid[x][y] ? 0 : 1
    
    drawGrid()
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDragging)return

    let bounds = canvas.getBoundingClientRect()

    let x = Math.floor((e.clientX - bounds.left) / (bounds.width / gridSize))
    let y = Math.floor((e.clientY - bounds.top) / (bounds.height / gridSize))

    if(oldField.x === x && oldField.y === y)return
    oldField.x = x
    oldField.y = y

    grid[x][y] = 1

    drawGrid()
});

document.addEventListener('mouseup', (e) => {
    isDragging = false
});

slider.addEventListener('input', e => {
    setUpdateInterval(1050 - e.target.value * 1000)
})

pause.addEventListener('click', e => {
    e.currentTarget.innerHTML = e.currentTarget.innerHTML === 'pause' ? 'play' : 'pause'
})

step.addEventListener('click', e => {
    updateGrid()
    drawGrid()
})

reset.addEventListener('click', e => {
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            grid[i][j] = 0
        }
    }

    pause.innerHTML = 'play'
    setSliderValue(1)
    setUpdateInterval(1050 - slider.value * 1000)

    drawGrid()
})