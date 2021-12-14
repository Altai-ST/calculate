export const onPlus =(num1, num2)=>({
    type: 'PLUS',
    val1: num1,
    val2: num2,
})

export const onMinus =(num1, num2)=>({
    type: 'MINUS',
    val1: num1,
    val2: num2
})


export const onMulti =(num1, num2)=>({
    type: 'MULTI',
    val1: num1,
    val2: num2
})

export const onDivision =(num1, num2)=>({
    type: 'DIVISION',
    val1: num1,
    val2: num2
})

export const onReCount = {
    type: 'RECOUNT'
}

export const onUndo = {
    type: 'UNDO'
}

export const onRedo = {
    type: 'REDO'
}

export const onReset = {
    type: 'RESET'
}