import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../styles.css"

const App = () => {

    const dispatch = useDispatch()
    
    const handleInc = () => {
        dispatch({type: "plus"})
    }
    
    const handleDec =() => {
        dispatch({ type: "minus" })
    }

    const restore = () => {
        dispatch({type: "breeak"})
    }

    const number = useSelector((state) => state.number)

    return (
        <div className='body'>
                <div className='number' onClick={restore}>{number}</div>
                <div className='buttons'>
                    <button className='btn1' onClick={handleDec}>–</button>
                    <button className='btn2'onClick={handleInc}>+</button>
                </div>
        </div>
    )
}

export default App
