// @ts-check
import { grid,gridSize,oldField,pixelSize,setSliderValue,setUpdateInterval,updateInterval } from "../state";
import { canvas,slider,pause,step,reset } from "../dom";
import { drawGrid, updateGrid } from "../functions/coreFunctions";

let isDragging = false

function getPos(e) {
  let bounds = canvas.getBoundingClientRect();
  let clientX = e.touches ? e.touches[0].clientX : e.clientX;
  let clientY = e.touches ? e.touches[0].clientY : e.clientY;
  let x = Math.floor((clientX - bounds.left) / (bounds.width / gridSize));
  let y = Math.floor((clientY - bounds.top) / (bounds.height / gridSize));
  return { x, y };
}

function startDrag(e) {
  e.preventDefault();
  isDragging = true;
  let { x, y } = getPos(e);
  grid[x][y] = grid[x][y] ? 0 : 1;
  drawGrid();
}

function dragMove(e) {
  if (!isDragging) return;
  e.preventDefault();
  let { x, y } = getPos(e);
  if (oldField.x === x && oldField.y === y) return;
  oldField.x = x;
  oldField.y = y;
  grid[x][y] = 1;
  drawGrid();
}

canvas.addEventListener('mousedown', startDrag);
canvas.addEventListener('touchstart', startDrag);

canvas.addEventListener('mousemove', dragMove);
canvas.addEventListener('touchmove', dragMove);

document.addEventListener('mouseup', () => { isDragging = false });
document.addEventListener('touchend', () => { isDragging = false });

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