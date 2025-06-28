import { setPattern,runGameLoop,drawGrid } from "./functions/coreFunctions"
import { initGrids } from "./state"

initGrids()
// setPattern([
//   [0, 1, 0],
//   [1, 1, 0],
//   [0, 1, 1],
// ])
runGameLoop()
drawGrid() //called in runGameLoop as well, but needs to be called once to draw the grid.