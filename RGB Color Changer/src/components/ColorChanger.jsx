import { useState } from "react";
import "../styles/ColorChanger.css"

function ColorChanger() {

    const colors = JSON.parse(localStorage.getItem('color'))
    const [red, setRed] = useState(colors && colors.red ? colors.red : 0 )
    const [green, setGreen] = useState(colors && colors.green ? colors.green : 0 )
    const [blue, setBlue] = useState(colors && colors.blue ? colors.blue : 0 )
    
    function saveData() {
        console.log("saved");
        
        localStorage.setItem("color", JSON.stringify({red, green, blue}))
    }

    return(
        <>
        <div className="content-start-div">
            <div className="content-div">
                <h1 style={{color: "rgb("+red+","+green+","+blue+")"}}>Color Changer</h1>
                <p className="color-box" style={{backgroundColor: "rgb("+red+","+green+","+blue+")"}}></p>
                <div>
                    <p>Red : {red} out of 255</p>
                    <label>RED</label>
                    <input type="range" min={0} max={255} value={red}
                    onChange={(e)=> setRed(e.target.value)} />   
                </div>
                <div>
                    <p>Green : {green} out of 255</p>
                    <label>Green</label>
                    <input type="range" min={0} max={255} value={green}
                    onChange={(e)=> setGreen(e.target.value)} />
                </div>
                <div>
                    <p>Blue : {blue} out of 255</p>
                    <label>Blue</label>
                    <input type="range" min={0} max={255} value={blue}
                    onChange={(e)=> setBlue(e.target.value)} />
                </div>
                <button onClick={()=> saveData()} className="btn" style={{backgroundColor: "rgb("+red+","+green+","+blue+")"}}>Save Color</button>
            </div>  
        </div>
        </>
    )
}


export default ColorChanger;