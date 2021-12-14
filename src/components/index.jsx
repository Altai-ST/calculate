import React, { useState, useEffect } from 'react'
import useCalc from './useCalc/useCalc'
import style from '../style/calc.module.css'

export default function Calculate() {
    const {
        num1, num2, state, activeUndo, 
        handleClickPlus, handleClickMinus, handleUndo, handleChange, handleClickMulti, handleClickDevision,
        errMessage, activeRedo, handleRedo, handleReset
    } = useCalc()

    return (
        <div className={style.container}>
            <div className={style.calculate}>
                <h1>Calculate</h1>
                <div className={style.inputNum}>
                    <input className={style.inputNum_elem} type="number" name='input1' value={num1} onChange={handleChange}/>
                    <input className={style.inputNum_elem} type="number" name='input2' value={num2} onChange={handleChange} />
                </div>
                {errMessage && <p className={style.errMessage}>На ноль делить нельзя</p>}
                <div className={style.resultBox}>
                    
                    <span className={style.result}>{state.current}</span>
                </div>
                <div className={style.operators}>
                    <button className={style.btn} onClick={handleClickPlus}>+</button>
                    <button className={style.btn} onClick={handleClickMinus}>-</button>
                    <button className={style.btn} onClick={handleClickMulti}>*</button>
                    <button className={style.btn} onClick={handleClickDevision}>/</button>
                    <button className={style.btn} disabled={activeUndo} onClick={handleUndo}>Undo</button>
                    {/* <button className={style.btn} disabled={activeRedo} onClick={handleRedo}>Redo</button> */}
                    <button className={style.btn} onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}
