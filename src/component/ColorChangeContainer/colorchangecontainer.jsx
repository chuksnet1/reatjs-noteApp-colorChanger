import React, { useState } from "react"
import './colorchange.css'


const ColorChangeCOntainer=({colorChanger})=>{          //Here we distruct props
    const[colorinput, setColorInput] = useState("")

    const handleInput=(e)=>{
        const {value} = e.target;
        setColorInput(value)
        
    }

    const sendColor=()=>{
        colorChanger(colorinput)
    }
    
    sendColor()

    return <div className="color-container">
        <p>    Enter Color to Container Color</p>
        <input onChange={handleInput} placeholder='change container color'></input>
    </div>
}

export default ColorChangeCOntainer;