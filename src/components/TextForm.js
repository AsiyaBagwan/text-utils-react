
import React, { useState } from 'react'




export default function TextForm(props) {
  const handleupclick = () => {
    console.log("UpperCase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoclick = () => {
    console.log("Lowercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearclick = () => {
    console.log("Clear was clicked" + text)
    let newText = '';
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  // setText=("new text")
const handleExtraSpaces=()=>
{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}

  return (
    <>
      <div className="container">


        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleupclick}>Convert to uppercase</button>
        <button className="btn btn-success mx-1" onClick={handleLoclick}>Convert to LowerCase</button>
        <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-1" onClick={handleClearclick}>Clear</button>
        
        
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} Minutes read</p>
        
        <h3>Preview</h3>
        <p>{text}</p>
        
      </div>
    </>
  )
}
