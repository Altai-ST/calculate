export const reducerCalculate = (state, action)=>{
        switch(action.type){
            case 'PLUS':
                return {
                        ...state, 
                        current: Number(action.val1) + Number(action.val2),
                        history: [...state.history, state.current],
                        redoHistory:[state.current, ...state.redoHistory]
                    }
            case 'MINUS':
                return {
                    ...state, 
                    current: Number(action.val1) - Number(action.val2),
                    history: [...state.history, state.current]
                }
            case 'MULTI':
                return {
                    ...state, 
                    current: Number(action.val1) * Number(action.val2),
                    history: [...state.history, state.current]
                }
            case 'DIVISION':
                return {
                    ...state, 
                    current: Number(action.val1) / Number(action.val2),
                    history: [...state.history, state.current]
                }
            case 'REundoCount':
                return {
                    ...state,
                    undoCount: 1
                }
            case 'UNDO':
                return {
                    ...state, 
                    current: state.history[state.history.length - state.undoCount], 
                    undoCount: state.undoCount + 1
                }
            case 'REDO':
                return{
                    ...state,
                    current: state.redoHistory[state.redoHistory.length - state.redoCount],
                    redoCount: state.redoCount + 1,
                }
            case 'RESET':
                return{
                    ...state,
                    current: '0',
                    history: [],
                    undoCount: 1,
                }
            default: return state
        }
    }
