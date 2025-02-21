import React, {useState} from "react";

function ColorPicker(){
    const [color, setColor] = useState("black");
    
    function handleColorPicker(event){
        setColor(event.target.value);
    }

    return(
        <div className="container">
            <h1>Color Picker</h1>
            <div className="colorBox" style={ { backgroundColor: color, padding: "20px"} }>
                <p>Selected Color: {color}</p>
            </div>
            <label> Pick Color You want: </label>
            <input type="color" value={color} onChange={handleColorPicker}></input>
        </div>
    );

}

export default ColorPicker