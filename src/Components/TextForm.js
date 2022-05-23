import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text is variable with default value 'Enter Text Here...'. So whenever we want to update text
    // we will use function i.e; setText.
    // Syntax: setText("New Text...")
  
    const [count, setCount] = useState(0);
    const [preview, setPreview] = useState(
      "Waiting for you to start doing fun........."
    );

  const textUPclick = () => {
    // console.log("Upper Clicked");
    const upperText = text.toUpperCase();
    setText(upperText); // to set new text
    
    

    if(text.length!==0)
    {
        props.showAlerts("Successfully converted to Upper Case","success");
        setPreview(upperText);
    }
    else
    {
        props.showAlerts("Please enter proper text to convert into Upper Case","danger");
        
    }
  };

  const textLowclick = () => {
    // console.log("Lower Clicked");
    const lowerText = text.toLowerCase();
    setText(lowerText); // to set new text
    

    if(text.length!==0)
    {
        props.showAlerts("Successfully converted to Lower Case","success");
        setPreview(lowerText);
    }
    else
    {
        props.showAlerts("Please enter proper text to convert into Lower Case","danger");
        
    }
  };
  const ResetText = () => {
  
    if(text.length!==0)
    {
        props.showAlerts("Text area has been reset...","success");
        setText("");
        setCount(0);
        setPreview("Waiting for you to start doing fun.........");
    }
    else
    {
        props.showAlerts("Text area is already empty...","danger");
        
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);

    if(text.length!==0)
    {
        props.showAlerts("Successfully copied to clipboard","success");
    }
    else
    {
        props.showAlerts("Please enter proper text to copy into clipboard","danger");
        
    }
  };

  const OnKeyDown = () => {



    if (text.length===0) {
        setCount(0);
        setPreview("Waiting for you to start doing fun.........");
    }
  };

const onKeyUp = ()=> {

    let newText = text.split(/[ ]+/);
    newText = newText.join(" "); //To not treat double space as word
    setCount(newText.trim().split(/\s+/g).length); //To set new counter value on button click
    if (text.length!==0) {
        setPreview(text);
    }
    else{
        setCount(0);
        setPreview("Waiting for you to start doing fun.........");
    }
}

  const EraseExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    if(text.length!==0)
    {
        props.showAlerts("Successfully removed extra spaces","success");
       
    }
    else
    {
        props.showAlerts("Please enter proper text to remove extra spaces","danger");
        
    }
  };
  // We can set the entered value as text.
  // Once we fired the click by default react don't allow us to edit text

  const updateText = (event) => {
    setText(event.target.value); // To allow us to edit value of textarea
  };

  // Declare a new state variable, which we'll call "text"


  return (
    <>
      <h1 style={{color:`${(props.mode==='dark'?'white':'black')}`}}>{props.heading}</h1>
      <div className="mb-3 my-3" >
        <textarea style={{backgroundColor:`${(props.mode==='light'?'white':'#01081a')}`,color:`${(props.mode==='light'?'black':'white')}`}}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          placeholder="Enter Text Here...."
          value={text}
          onKeyDown={OnKeyDown}
          onKeyUp = {onKeyUp}
          onChange={updateText} //onChange is importat to change state of Hook variable on any event
        ></textarea>
      </div>
      <button className="btn btn-primary btn-sm mb-3 mr-3" onClick={textUPclick}>
        Upper Case
      </button>
      <button
        className="btn btn-success btn-sm mb-3 ml-5"
        onClick={textLowclick}
      >
        Lower Case
      </button>
      <button className="btn btn-secondary btn-sm mb-3 ml-5" onClick={copyText}>
          Copy
      </button>
      <button className="btn btn-warning btn-sm mb-3 ml-5 text-light" onClick={EraseExtraSpace}>
        Erase Extra Space
      </button>
      <button className="btn btn-danger btn-sm mb-3 ml-5" onClick={ResetText}>
        Reset
      </button>
      <div className={`container pt-2 bg-${(props.mode==='dark'?'#111':'light')} text-${(props.mode==='light'?'dark':'white')} border border-success rounded mb-3`}>
        <p>
          Total Words: {count} | Total Characters: {text.length}
        </p>
      </div>

      <h3 className={`text-${(props.mode==='light'?'dark':'light')}`}>Preview:</h3>
      <div className={`container pt-2  text-${(props.mode==='light'?'dark':'light')} border  rounded `} style={{backgroundColor:`${(props.mode==='dark'?'#001009':'white')}`}}>
        <p>{preview}</p>
      </div>
    </>
  );
  
}
