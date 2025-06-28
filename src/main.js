import { runGameLoop,drawGrid } from "./coreFunctions"
import { initGrids } from "./variables"

initGrids()
runGameLoop()
drawGrid() //called in runGameLoop as well, but needs to be called once to draw the grid.