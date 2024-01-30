import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper Case", "success");
    }
    const handleLoclick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearclick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text has been cleared", "danger");
    }
    const handleCapitalizeclick = () => {
        let newText = text.toLowerCase();
        newText = newText.split(' ');
        newText = newText.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
        newText = newText.join(' ');
        setText(newText);
        props.showAlert("Converted to Capitalize Case", "success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.heading}</h1>
           <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} value={text} id="MyBox" rows="3" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleCapitalizeclick}>Convert to capitalize</button>
          <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear text</button>
          <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h1>Preview</h1>
            <p>{text}</p>
          </div>
    </div>
    </>
    
  )
}

