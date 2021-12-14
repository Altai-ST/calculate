import React, { useState, useEffect, useReducer } from 'react'
import { reducerCalculate } from './reducer/reducer'
import { onPlus, onMinus, onReCount, onUndo, onMulti, onDivision, onRedo, onReset } from './action'

export default function useCalc() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [activeRedo, setActiveRedo] = useState(true)
    const [activeUndo, setActiveUndo] = useState(true)
    const [errMessage, setErrMessage] = useState(false)

    const result = {
        current: '0',
        history: [],
        redoHistory:[],
        redoCount: 1,
        undoCount: 1,
    }

    const [state, dispatch] = useReducer(reducerCalculate, result)


    useEffect(() => {
        console.log(state.redoHistory)
        if(state.history.length !== 0 && state.current !== state.history[0]){
            setActiveUndo(false)
        }else if(state.current === state.history[0] || state.history.length === 0){
            setActiveUndo(true)
            dispatch(onReCount) 
        }
        console.log(state.redoHistory[0])

        if(state.redoHistory.length !== 0 && state.current !== state.redoHistory[0]){
            setActiveRedo(false)
        }else if(state.current === state.redoHistory[0+1]){
            setActiveRedo(true)
            dispatch(onReCount)
        }
    }, [state.current])

   

   const handleClickPlus = ()=>{
        if(num1 !== '' && num2 !== ''){
            dispatch(onPlus(num1, num2))
        }    
        setErrMessage(false)
   }

   const handleClickMinus = ()=>{
        if(num1 !== '' && num2 !== ''){
            dispatch(onMinus(num1, num2))
        }  
        setErrMessage(false)
   }

   const handleClickMulti =()=>{
        if(num1 !== '' && num2 !== ''){
            dispatch(onMulti(num1, num2))
        } 
        setErrMessage(false)
   }

   const handleClickDevision =()=>{
       if(Number(num2) !== 0 ){
            if(num1 !== '' && num2 !== ''){
                dispatch(onDivision(num1, num2))
                setErrMessage(false)
            }
       }else if(Number(num2) === 0){
           setErrMessage(true)
       }
   }

    const handleUndo = ()=>{
        dispatch(onUndo)
    }

    const handleRedo = () =>{
        dispatch(onRedo)
    }

    const handleChange = (e)=>{
        if(e.target.name === 'input1'){
            setNum1(e.target.value)
        }else if(e.target.name === 'input2'){
            setNum2(e.target.value)
        }
    }

    const handleReset = ()=>{
        dispatch(onReset)
        setNum1('')
        setNum2('')
    }

    return {
        num1,
        num2,
        state,
        activeUndo,
        handleClickPlus,
        handleClickMinus,
        handleUndo,
        handleChange,
        handleClickMulti,
        handleClickDevision,
        errMessage,
        activeRedo,
        handleRedo,
        handleReset
    }
}
