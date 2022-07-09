/* eslint-disable no-eval */
import { Flex } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import React from 'react'
import { useState } from 'react';
import './calculator.css'

function Calculator() {
    const [operand, setOperand] = useState("")
    const [result, setResult] = useState("")

    const opr = ["*", "/", "+", "-", "."]

    const createButton = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {

            digits.push(<button key={i} onClick={() => {inputValue(i.toString())}}>{i}</button>);
        }

        return digits;
    }

    const inputValue = (value) => {
        if ((opr.includes(value) && operand === '') || (opr.includes(value) && opr.includes(operand.slice(-1)))) {
            return;
        }

        setOperand(operand + value);

        if (!opr.includes(value)) {
            setResult(eval(operand + value).toString());   
        }
    }


    const deleteLast = () => {
        if (operand === '') {
            return;
        }
        
        const value = operand.slice(0, -1);
        setOperand(value);
        setResult(eval(value))
    }

    const reset = () => {
        setResult("");
        setOperand("");
    }

    const equal = () => {
        setResult()
        setOperand(result);
    }

    createBreakpoints(
        {
            sm: '40em',
            md: '52em',
            lg: '64em',
            xl: '80em'
        }
    )

    return (
        <React.Fragment>
            <Flex justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <div className="calculator"> 
                    <div className="result-container">
                        <div className="result">{result ? result : ""}</div>
                        <div className="operand">{operand ? operand : "0"}</div>
                    </div>
                    <div className="button">
                        <button onClick={() => {reset()}}>AC</button>
                        <button onClick={() => {deleteLast()}}>DEL</button>
                        <button onClick={() => {inputValue("*")}}>*</button>
                        <button onClick={() => {inputValue("/")}}>/</button>
                        <button onClick={() => {inputValue("+")}}>+</button>
                        <button onClick={() => {inputValue("-")}}>-</button>
                        {createButton()}
                        <button onClick={() => {inputValue("0")}}>0</button>
                        <button onClick={() => {inputValue(".")}}>.</button>
                        <button className='equal' onClick={() => {equal()}}>=</button>
                    </div>
                </div>
            </Flex>
        </React.Fragment>
    )
}

export default Calculator