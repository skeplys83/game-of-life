import { slider,canvas } from './dom'
import { create2DArray } from './functions/coreFunctions'

export let updateInterval = (1050 - slider.value * 1000)

export const gridSize = 50
export const pixelSize = 10

export let oldField = {x : 0, y : 0}

export let grid
export let tmpGrid

canvas.width = pixelSize * gridSize
canvas.height = pixelSize * gridSize

export const initGrids = () => {
    grid = create2DArray(gridSize, gridSize)
    tmpGrid = create2DArray(gridSize, gridSize)
}

export const setUpdateInterval = (value) => {
    updateInterval = value
}

export const setSliderValue = (value) => {
    slider.value = value
}
