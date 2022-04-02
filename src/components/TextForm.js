import React, {useState} from 'react'



export default function TextForm(props) {
    const clrtext = () => {
        let newText = '';
        setText(newText)
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(newText.value);
    }
    
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container my-5' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'#191919':'white' , color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={clrtext}>Clear Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>    
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpace}>Remove extra spaces</button>    
    </div>
    <div className="container my-40" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
