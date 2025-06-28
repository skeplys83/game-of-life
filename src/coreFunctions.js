import { tmpGrid,grid,gridSize,updateInterval,pixelSize } from "./variables";
import { ctx,canvas,pause } from "./domElements";

export const create2DArray = (rows, cols, initialValue = 0) => {
    return Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => initialValue)
    );
}

//core game logic
export const updateGrid = () => {
    for (let i=0; i<grid.length; i++) {
        tmpGrid[i] = [...grid[i]]
    }

    //goes over all cells
    for (let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            
            let aliveCells = 0

            //counts alive cells around current cell
            for (let k=-1; k<=1; k++) {
                for (let l=-1; l<=1; l++) {
                    if(
                        //wraps the game canvas around, making it infinite
                        grid[i+k < 0 ? i+k + gridSize : i+k >= gridSize ? 0 : i+k]
                            [j+l < 0 ? j+l + gridSize : j+l >= gridSize ? 0 : j+l] === 1
                        //dont count the current cell itself
                        && !(k === 0 && l === 0)
                    )aliveCells++
                }
            }
            
            //game of life rules
            if(aliveCells < 2)tmpGrid[i][j] = 0
            if(aliveCells > 3)tmpGrid[i][j] = 0
            if(grid[i][j] === 0 && aliveCells === 3)tmpGrid[i][j] = 1
        }
    }

    for (let i=0; i<grid.length; i++) {
        grid[i] = [...tmpGrid[i]]
    }
}

export const drawGrid = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++){
            ctx.fillStyle = !grid[i][j] ? '#000' : '#fff'
            ctx.fillRect(i*pixelSize, j*pixelSize, pixelSize, pixelSize)
        }
    }
}

export const runGameLoop = () => {
    if(pause.innerHTML === 'pause') {
        updateGrid()
        drawGrid()
    }
    setTimeout(runGameLoop, updateInterval)
}

export const setPattern = (array, posX = 0, posY = 0) => {
  if (!Array.isArray(array)) return;
  const rows = array.length;
  const cols = array[0]?.length || 0;

  if (rows === 0 || cols === 0) return;
  if (posY + rows > gridSize || posX + cols > gridSize) return;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid[posY + x][posX + y] = array[y][x];
    }
  }
};
